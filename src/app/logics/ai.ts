

// แยก response เป็น array เฉพาะ topic ที่ต้องการ
export interface AdVersion {
  primaryText: string;
  headline: string;
  description: string;
  hashtag: string;
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

import axios from "axios";

export async function callChatGPT({
  product,
  selling_point,
  objective,
  target,
  apiKey,
  model = "gpt-3.5-turbo"
}: {
  product: string;
  selling_point: string;
  objective: string;
  target: string;
  apiKey: string;
  model?: string;
}) {
  try {
    console.log('API Key:', apiKey); // log API key for debug
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
  };
    const prompt =
      "บทบาทของคุณ: คุณคือ Creative & Performance Marketer ที่เชี่ยวชาญ Facebook/Instagram Ads และ Direct Response Copywriting พร้อมคิดคอนเซปต์ คอนเทนต์ และสคริปต์วิดีโอได้ครบถ้วน ตั้งเป้า Conversion/Lead/Message ตามที่กำหนด " +
      "1) บริบทแบรนด์/สินค้า ชื่อแบรนด์:ttb หมวดสินค้า/บริการ:" + product +
      " จุดขายหลัก (USP):" + selling_point +
      " วัตถุประสงค์แคมเปญ:" + objective +
      " กลุ่มเป้าหมาย:" + target +
      " สิ่งที่ต้องการให้สร้าง (Output)โปรดส่งมอบ ชุดครีเอทีฟพร้อมยิงโฆษณา ดังนี้ ชุดคอนเทนต์โฆษณา (อย่างน้อย 5 เวอร์ชัน) สำหรับแต่ละเวอร์ชัน ให้มี:Primary Text (3 ความยาว):สั้น ≤125 ตัวอักษร (Hook ชัด อ่านจบในมือถือ)กลาง 125–220 ตัวอักษรยาว 221–500 ตัวอักษร Headline (3 แบบ): เน้นคมชัด แนะนำ ≤27 ตัวอักษรสำหรับมือถือ Description (1 แบบ): ≤30 ตัวอักษร (เสริมความเข้าใจ) อีโมจิ/ไอคอน: ใส่พอดี ช่วยอ่านง่าย (ถ้าเหมาะสม) แฮชแท็ก: 2–4 แท็ก (เน้นสื่อความ ไม่สแปม) สร้าง Hook แบบคำถาม, ตัวเลข, ข้อเปรียบเทียบ, ผลลัพธ์, ข้อท้าทาย, ข้อผิดพลาดที่พบบ่อย";
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