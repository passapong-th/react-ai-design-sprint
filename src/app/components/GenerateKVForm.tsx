"use client";
import React from "react";
import Link from "next/link";
import { generateImageWithGemini } from "../logics/ai";

interface KvOption {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  bigIdeaData?: any;
}

const kvOptions: KvOption[] = [
  {
    title: "Idea 1: 'ประกันเป็นเรื่องใกล้ตัว'",
    subtitle: "เริ่มวันนี้ เพื่ออนาคตที่มั่นใจ",
    desc: "มอบคุณค่าเรื่อง ออมต่อ ชีวิตดีๆ หลายคนมักคิดว่า 'ประกัน' เป็นเรื่องของอนาคตไกล ๆ แต่จริง ๆ แล้วเริ่มต้นตั้งแต่วันนี้เพื่อเป้าหมายต่อยอดสำคัญในชีวิต คนที่ทำให้สำเร็จเสมอมา: 'คุณพร้อมหรือยัง ถ้าคนข้างๆมีเป้าหมายเดียวกัน?' ประกันนี้มั่นใจด้วยการแถลงแผนเพื่อการเติบโตต่อเนื่อง ราคาคุ้มค่า!",
    img: "/option1.jpg"
  },
  {
    title: "Idea 2: 'เพราะรักคือการวางแผน'",
    subtitle: "รักใคร วางแผนให้เขา",
    desc: "เชื่อในอนาคตของผู้ที่คุณควรดูแลคนที่รักด้วยการวางแผนประกันสะสมทรัพย์ รักหรือปกป้องคนที่รักด้วยประกันที่มั่นใจที่สุด! 'ใครคือคนที่คุณอยากวางแผนให้?' กับประกันสะสมทรัพย์ ttb ที่มั่นใจได้ว่าคนที่คุณรักจะมีอนาคตที่มั่นใจและมั่นคงเสมอมา!",
    img: "/option2.jpg"
  },
  {
    title: "Idea 3: 'อนาคตเลือกได้'",
    subtitle: "วางแผนวันนี้ เพื่ออนาคตที่คุณอยากเห็น",
    desc: "สร้างอนาคตใหม่ๆ 'วางแผนวันนี้เพื่อการเป็นเจ้าของอนาคตแบบที่คุณต้องการเห็น' ใช้ Interactive Tools/การออม/การศึกษา/การเติบโต/การลงทุน เช่น การออมแบบมีเป้าหมายชัดเจน และนำเสนอด้วยภาพครอบครัวที่มีความสุขในชีวิตจริง",
    img: "/option3.jpg"
  }
];

const GenerateKVForm: React.FC = () => {
  const [geminiImages, setGeminiImages] = React.useState<Array<{imageUrl: string, description: string} | null>>([null, null, null]);
  const [isGeneratingGemini, setIsGeneratingGemini] = React.useState<boolean[]>([false, false, false]);
  const [showGeminiApiKeyModal, setShowGeminiApiKeyModal] = React.useState(false);
  const [geminiApiKey, setGeminiApiKey] = React.useState("");
  const [selectedBigIdeas, setSelectedBigIdeas] = React.useState<any[]>([]);
  const [mappedKvOptions, setMappedKvOptions] = React.useState<KvOption[]>(kvOptions);

  React.useEffect(() => {
    // อ่านข้อมูล Big Ideas ที่เลือกมา
    const savedBigIdeas = localStorage.getItem('selectedBigIdeas');
    if (savedBigIdeas) {
      const parsedData = JSON.parse(savedBigIdeas);
      setSelectedBigIdeas(parsedData.selectedTopics || []);
      console.log('Loaded selected Big Ideas:', parsedData.selectedTopics);
      
      // Map kvOptions กับ selectedData
      if (parsedData.selectedTopics && parsedData.selectedTopics.length > 0) {
        const updatedKvOptions = kvOptions.map((option, index) => {
          const selectedIdea = parsedData.selectedTopics[index % parsedData.selectedTopics.length];
          if (selectedIdea) {
            return {
              ...option,
              title: `Idea ${index + 1}: ${selectedIdea.primaryText}`,
              subtitle: selectedIdea.headline || option.subtitle,
              desc: selectedIdea.description || option.desc,
              bigIdeaData: selectedIdea // เก็บข้อมูล big idea เดิมไว้
            };
          }
          return option;
        });
        setMappedKvOptions(updatedKvOptions);
        console.log('Mapped KV Options:', updatedKvOptions);
      }
    }

    // เช็คว่ามี Google AI API key หรือไม่
    const savedApiKey = localStorage.getItem('NEXT_PUBLIC_GOOGLE_AI_API_KEY');
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
      // เริ่มสร้างภาพทั้ง 3 ภาพ
      generateAllImages(savedApiKey);
    } else {
      setShowGeminiApiKeyModal(true);
    }
  }, []);

  const generateAllImages = async (apiKey: string) => {
    // สร้าง prompt จาก Big Ideas ที่เลือกและ mapped KV options
    const bigIdeaContext = selectedBigIdeas.length > 0 
      ? `Based on these selected big ideas: ${selectedBigIdeas.map(idea => `"${idea.primaryText}" - ${idea.description}`).join(', ')}. `
      : '';

    // สร้าง prompt สำหรับแต่ละไอเดียโดยใช้ mappedKvOptions
    const prompts = mappedKvOptions.map((option, index) => {
      const specificContext = option.bigIdeaData 
        ? `Specifically for "${option.bigIdeaData.primaryText}" concept with "${option.subtitle}" theme. `
        : '';
      
      return `${bigIdeaContext}${specificContext}Create a professional bank advertisement image for "${option.title}". The image should convey the message: "${option.desc}". Style should be professional, trustworthy, and suitable for Thai banking market.`;
    });

    // สร้างภาพทั้ง 3 ภาพพร้อมกัน
    for (let i = 0; i < 3; i++) {
      setIsGeneratingGemini(prev => {
        const newState = [...prev];
        newState[i] = true;
        return newState;
      });

      try {
        const result = await generateImageWithGemini({
          prompt: prompts[i],
          apiKey: apiKey
        });
        
        setGeminiImages(prev => {
          const newImages = [...prev];
          newImages[i] = result;
          return newImages;
        });
        
        console.log(`Generated Gemini image ${i + 1}:`, result);
      } catch (err) {
        console.error(`Gemini image generation error for idea ${i + 1}:`, err);
      } finally {
        setIsGeneratingGemini(prev => {
          const newState = [...prev];
          newState[i] = false;
          return newState;
        });
      }
    }
  };

  const handleSaveGeminiApiKey = () => {
    if (geminiApiKey.trim()) {
      localStorage.setItem('NEXT_PUBLIC_GOOGLE_AI_API_KEY', geminiApiKey.trim());
      setShowGeminiApiKeyModal(false);
      // เริ่มสร้างภาพหลังจากบันทึก API key
      generateAllImages(geminiApiKey.trim());
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Google AI API Key Modal */}
      {showGeminiApiKeyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Enter Google AI API Key</h2>
            <p className="text-gray-600 mb-6">Please enter your Google AI API key to generate images with Gemini.</p>
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="AIza..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleSaveGeminiApiKey();
                }}
                disabled={!geminiApiKey.trim()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
              >
                Save & Generate
              </button>
              <button
                onClick={() => setShowGeminiApiKeyModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gemini Loading Modal */}
      {isGeneratingGemini.some(isLoading => isLoading) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="w-1/2 bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
              <div className="h-4 bg-blue-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
            <span className="text-blue-700 font-semibold">กำลังสร้างภาพจาก Gemini AI กรุณารอสักครู่...</span>
          </div>
        </div>
      )}
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-bold text-[#1A202C] text-lg">Ads Generator</span>
        </div>
        <nav className="flex flex-col gap-2">
          <Link href="/">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F6FB] text-[#1A202C] font-medium w-full text-left">
              <span>Content</span>
            </button>
          </Link>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#4B5563] hover:bg-[#F3F6FB] w-full text-left">
            <span>Report</span>
          </button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[#F7FAFC]">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-[#1A202C]">Generate KV</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                <span className="text-[#2563EB] font-bold">P</span>
              </div>
              <span className="text-[#1A202C] text-sm">Pakorn Marketing</span>
            </div>
            <button className="text-[#4B5563] text-xl">&#9660;</button>
          </div>
        </header>
        {/* Form Section */}
        <section className="p-8 flex flex-col gap-6 max-w-6xl mx-auto">
          <div className="mb-4">
            <h2 className="font-semibold text-xl text-[#2563EB] mb-2">Generate KV</h2>
            <div className="text-lg font-semibold text-[#1A202C] mb-2">Campaign name : ประกันสะสมทรัพย์</div>
            <div className="text-[#F59E42] mb-2">เลือกไอเดียที่ชอบ (สามารถเลือกได้มากกว่า 1 ไอเดีย)</div>
            <div className="font-semibold text-[#2563EB] mb-2">AI Big Idea</div>
            
            {/* แสดง Big Ideas ที่เลือกมา */}
            {selectedBigIdeas.length > 0 ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-blue-800 mb-2">Selected Big Ideas ({selectedBigIdeas.length}):</div>
                {selectedBigIdeas.map((idea, index) => (
                  <div key={index} className="text-sm text-blue-700 mb-1">
                    • {idea.primaryText}
                    {idea.description && <span className="text-blue-600"> - {idea.description}</span>}
                  </div>
                ))}
              </div>
            ) : (
              <input type="text" className="border border-[#E5E7EB] rounded-lg px-3 py-2 w-full mb-2" value="Before–After–Bridge (สำหรับผู้ที่ต้องการความมั่นคงในชีวิต)" readOnly />
            )}
          </div>
          <form className="flex gap-6">
            {mappedKvOptions.map((option, idx) => (
              <label key={idx} className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-2 w-1/3 cursor-pointer">
                <input type="checkbox" className="accent-[#2563EB] mb-2" />
                
                {/* All ideas now use Gemini images */}
                <div className="mb-2 relative">
                  <img 
                    src={geminiImages[idx] ? geminiImages[idx]!.imageUrl : option.img} 
                    alt={option.title} 
                    className="rounded-lg w-full h-48 object-cover mb-2" 
                  />
                  {isGeneratingGemini[idx] && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                      <div className="text-white text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2 mx-auto"></div>
                        <div className="text-sm">Generating...</div>
                      </div>
                    </div>
                  )}
                  {geminiImages[idx] && (
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      ✨ AI
                    </div>
                  )}
                </div>
                
                <div className="font-semibold text-[#1A202C] mb-1">{option.title}</div>
                <div className="text-[#2563EB] text-sm mb-1">{option.subtitle}</div>
                <div className="text-[#4B5563] text-sm mb-2">{option.desc}</div>
                
                {/* แสดงข้อมูล Big Idea ถ้ามี */}
                {option.bigIdeaData && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 mb-2">
                    <div className="text-xs font-medium text-blue-800 mb-1">From Big Idea:</div>
                    <div className="text-xs text-blue-700">{option.bigIdeaData.primaryText}</div>
                    {option.bigIdeaData.hashtag && (
                      <div className="text-xs text-blue-600 mt-1">{option.bigIdeaData.hashtag}</div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-2 mt-auto">
                  <span className="flex items-center gap-1 text-green-600 text-sm"><span>✔</span> Compliant data</span>
                  <span className="flex items-center gap-1 text-green-600 text-sm"><span>✔</span> CI data</span>
                </div>
              </label>
            ))}
          </form>
                <div className="flex justify-between mt-6">
                  <Link href="/big-idea">
                    <button className="bg-[#F3F6FB] text-[#2563EB] px-8 py-2 rounded-lg font-semibold text-lg">Previous</button>
                  </Link>
                  <Link href="/generate-kv-segment">
                    <button className="bg-[#2563EB] text-white px-8 py-2 rounded-lg font-semibold text-lg">Next</button>
                  </Link>
                </div>
        </section>
      </main>
    </div>
  );
};

export default GenerateKVForm;
