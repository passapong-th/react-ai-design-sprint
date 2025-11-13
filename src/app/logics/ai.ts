

import { GoogleGenAI, Modality } from "@google/genai";
import axios from "axios";

// แยก response เป็น array เฉพาะ topic ที่ต้องการ
export interface AdVersion {
  primaryText: string;
  headline: string;
  description: string;
  hashtag: string;
}

export async function generateImageWithGemini({
  prompt,
  apiKey
}: {
  prompt: string;
  apiKey?: string;
}) {
  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey || process.env.NEXT_PUBLIC_GOOGLE_AI_API_KEY || ''
    });

    // ปรับ prompt ให้ระบุชัดเจนว่าต้องการแค่รูปภาพ ไม่ต้องการข้อความ
    const imageOnlyPrompt = `${prompt}. Generate only an image without any text, labels, or written content. Create a pure visual representation.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: imageOnlyPrompt,
    });

    console.log('Gemini response:', response);

    // ตรวจสอบ candidates และ content parts
    if (response.candidates && response.candidates.length > 0) {
      const candidate = response.candidates[0];
      
      if (candidate.content && candidate.content.parts) {
        for (const part of candidate.content.parts) {
          if (part.inlineData && part.inlineData.data) {
            const imageData = part.inlineData.data;
            
            // แปลง base64 เป็น data URL สำหรับแสดงใน browser
            const dataUrl = `data:image/png;base64,${imageData}`;
            
            console.log('Generated image URL:', dataUrl);
            
            return {
              imageUrl: dataUrl,
              description: `Generated image for: ${prompt}`
            };
          }
          // ลบส่วนที่ log text output เพื่อไม่ให้มีข้อความปะปน
        }
      }
    }
    
    throw new Error('No image data found in response');
  } catch (error: unknown) {
    console.error('Gemini AI image generation error:', error);
    
    // ส่งคืนภาพเริ่มต้น
    return {
      imageUrl: "/option1.jpg",
      description: "Default insurance concept image (AI generation failed)"
    };
  }
}

export function extractTopics(response: string): AdVersion[] {
  const lines = response.split('\n').map(line => line.trim());
  const versions: AdVersion[] = [];
  let current: Partial<AdVersion> = {};
  for (const line of lines) {
    if (line.startsWith('Primary Text:')) {
      current.primaryText = line.replace('Primary Text:', '').trim();
    } else if (line.startsWith('Headline:')) {
      current.headline = line.replace('Headline:', '').trim();
    } else if (line.startsWith('Description:')) {
      current.description = line.replace('Description:', '').trim();
    } else if (line.startsWith('แฮชแท็ก:')) {
      current.hashtag = line.replace('แฮชแท็ก:', '').trim();
      // เมื่อครบ 1 ชุด ให้ push แล้ว reset
      versions.push({
        primaryText: current.primaryText || '',
        headline: current.headline || '',
        description: current.description || '',
        hashtag: current.hashtag || ''
      });
      current = {};
    }
  }
  console.log('extractTopics result:', versions);
  return versions;
}
// src/app/logics/ai.ts
// Common utility for calling AI APIs (e.g. OpenAI, custom endpoints)

export async function callChatGPT({
  product,
  selling_point,
  objective,
  target,
  apiKey,
  model = "gpt-3.5-turbo",
  campaignName = "โฆษณาประกันสะสมทรัพย์",
  customerTarget = "Ecosystem",
  ecosystem = "Wealth", 
  platforms = ["Facebook", "Instagram"],
  language = "ไทย/อังกฤษ",
  mandatory = "",
  insight = ""
}: {
  product: string;
  selling_point: string;
  objective: string;
  target: string;
  apiKey: string;
  model?: string;
  campaignName?: string;
  customerTarget?: string;
  ecosystem?: string;
  platforms?: string[];
  language?: string;
  mandatory?: string;
  insight?: string;
}) {
  try {
    console.log('=== CallChatGPT Input Parameters ===');
    console.log('Product:', product);
    console.log('Selling Point:', selling_point);
    console.log('Objective:', objective);
    console.log('Target:', target);
    console.log('Campaign Name:', campaignName);
    console.log('Customer Target:', customerTarget);
    console.log('Ecosystem:', ecosystem);
    console.log('Platforms:', platforms);
    console.log('Language:', language);
    console.log('Mandatory:', mandatory);
    console.log('Insight:', insight);
    console.log('Model:', model);
    console.log('API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : 'Not provided'); // แสดงแค่ส่วนแรกของ API key
    console.log('=====================================');
    
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
  };
    const prompt =
      "บทบาทของคุณ: คุณคือ Creative & Performance Marketer ที่เชี่ยวชาญในการสร้างโฆษณา " + platforms.join("/") + " และ Direct Response Copywriting พร้อมคิดคอนเซปต์ Big Ideas และสคริปต์วิดีโอได้ครบถ้วน โดยมุ่งเป้าไปที่ Conversion/Lead/Message ตามที่กำหนด\n\n" +
      
      "ข้อมูลแคมเปญ:\n" +
      "- ชื่อแคมเปญ: " + campaignName + "\n" +
      "- แบรนด์: ttb (ธนาคารทีเอ็มบีธนชาต)\n" +
      "- หมวดสินค้า/บริการ: " + product + "\n" +
      "- จุดขายหลัก (Mood and tone): " + selling_point + "\n" +
      "- วัตถุประสงค์แคมเปญ (Goals & Indication): " + objective + "\n" +
      "- กลุ่มเป้าหมาย (Customer Target): " + customerTarget + " - " + ecosystem + "\n" +
      "- รายละเอียด sub-segment: " + target + "\n" +
      "- แพลตฟอร์ม: " + platforms.join(", ") + "\n" +
      "- ภาษา: " + language + "\n" +
      (mandatory ? "- ข้อกำหนดพิเศษ: " + mandatory + "\n" : "") +
      (insight ? "- Insight เพิ่มเติม: " + insight + "\n" : "") + "\n" +
      
      "งานที่ต้องการ: สร้าง Big Ideas สำหรับแคมเปญโฆษณา โดยแต่ละ Big Idea ควรมีองค์ประกอบดังนี้:\n\n" +
      
      "สำหรับแต่ละ Big Idea ให้มี:\n" +
      "Primary Text: ข้อความหลักที่สื่อถึงแนวคิดหลักของโฆษณา (สั้น กระชับ และมี Hook ที่ชัดเจน)\n" +
      "Headline: หัวข้อที่ดึงดูดความสนใจ ≤27 ตัวอักษร เหมาะสำหรับมือถือ\n" +
      "Description: คำอธิบายเสริม ≤200 ตัวอักษร ที่ช่วยเสริมความเข้าใจ\n" +
      "แฮชแท็ก: 2-4 แท็ก ที่เกี่ยวข้องและไม่สแปม\n\n" +
      
      "กรุณาสร้าง Big Ideas อย่างน้อย 3-5 ไอเดีย โดยใช้เทคนิค Hook ที่หลากหลาย เช่น:\n" +
      "- คำถามที่กระตุ้นความสนใจ\n" +
      "- ตัวเลข/สถิติ\n" +
      "- ข้อเปรียบเทียบ\n" +
      "- ผลลัพธ์ที่น่าสนใจ\n" +
      "- ความท้าทายหรือปัญหาที่กลุ่มเป้าหมายเผชิญ\n" +
      "- ข้อผิดพลาดที่พบบ่อย\n\n" +
      
      "ให้แต่ละ Big Idea มีความแตกต่างกันในแนวทางและ Hook โดยคำนึงถึงกลุ่มเป้าหมาย " + customerTarget + " - " + ecosystem + " และวัตถุประสงค์ " + objective;
      
    console.log('=== Generated Prompt ===');
    console.log(prompt);
    console.log('========================');
    
    const payload = {
      model,
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    };
    const response = await axios.post(endpoint, payload, { headers });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    }
    if (error instanceof Error) {
      throw error.message;
    }
    throw error;
  }
}