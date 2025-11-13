"use client";
import React from "react";
import Link from "next/link";
import { generateImageWithGemini } from "../logics/ai";

const segments = [
  {
    name: "W1 : Senior – Business Owner",
    desc: "ลูกค้าที่มีอายุ > 60 ปี มีอาชีพใน กลุ่มเจ้าของกิจการ",
    options: [
      {
        headline: "ออมวันนี้ เพื่อชีวิตมั่นคงสามสิบปีข้างหน้า",
        body: "วางแผนสร้างธุรกิจหรือเกษียณธุรกิจสร้างได้ วัดผลเกษียณจริง ประกันสะสมทรัพย์ที่ดูแลออมเงิน พร้อมคุ้มครองพร้อมผลตอบแทนต่อเนื่องแบบเกษียณ"
      },
      {
        headline: "ส่งต่อความรัก ด้วยแผนที่ปลอดภัย",
        body: "เพราะความรักคือการวางแผน ttb ประกันสะสมทรัพย์มั่นใจส่งต่อแผนของคุณกับใจอย่างต่อยอดเพื่อคนที่คุณรักมั่นใจด้วยแผนที่คุ้มครองพร้อมกับความมั่นใจที่อยู่ข้างในใจ"
      }
    ],
    images: ["/w1-1.jpg", "/w1-2.jpg"]
  },
  {
    name: "W2 : Senior – Professional",
    desc: "ลูกค้าที่มีอายุ > 60 ปี มีอาชีพใน กลุ่มอาชีพเฉพาะทาง",
    options: [
      {
        headline: "วางแผนชีวิตอย่างมืออาชีพ",
        body: "ตลอดชีวิตของคุณคือความภูมิใจจากอาชีพเฉพาะทางแต่แผนการเงินมั่นใจได้ด้วย ttb ประกันสะสมทรัพย์"
      },
      {
        headline: "ออมวันนี้ เพื่อชีวิตมั่นคงสามสิบปีข้างหน้า",
        body: "ttb ประกันสะสมทรัพย์มั่นใจด้วยแผนต่อยอดและคุ้มครองพร้อมผลตอบแทนที่ดีที่สุด"
      }
    ],
    images: ["/w2-1.jpg", "/w2-2.jpg"]
  },
  {
    name: "W3 : Wealth – Business Owner",
    desc: "ลูกค้าที่มีอายุ 41-60 ปี มีอาชีพใน กลุ่มเจ้าของกิจการ",
    options: [
      {
        headline: "ความมั่นคงที่ทำได้จริง ด้วยแผนต่อยอดธุรกิจ",
        body: "ความสำเร็จของธุรกิจคือความภูมิใจของครอบครัว ttb ประกันสะสมทรัพย์ เป็นเครื่องมือที่มั่นใจในการวางแผนการเงินและต่อยอดธุรกิจที่ดีสุด"
      },
      {
        headline: "เมื่อถึงวันที่คุณมั่นใจ...",
        body: "การวางแผนต่อยอดและการออมแบบมั่นใจในประกันสะสมทรัพย์ ttb ประกันสะสมทรัพย์ที่มั่นใจได้ด้วยมาตรฐานและผลตอบแทนที่ดีที่สุด"
      }
    ],
    images: ["/w3-1.jpg", "/w3-2.jpg"]
  },
  {
    name: "W4 : Wealth – Professional",
    desc: "ลูกค้าที่มีอายุ 41-60 ปี มีอาชีพใน กลุ่มอาชีพเฉพาะทาง",
    options: [
      {
        headline: "ออมมั่นคงอย่างต่อเนื่องไร้ความเสี่ยง",
        body: "ตลาดความมั่นคงและการวางแผนทางการเงินของคนรุ่นใหม่เป็นเรื่องต่อยอดได้ด้วย ttb ประกันสะสมทรัพย์ที่มั่นใจและคุ้มค่าที่สุด"
      },
      {
        headline: "กางแผนมั่นใจในทุกวงจร",
        body: "ผู้ที่มีอาชีพเฉพาะทางสร้างความมั่นใจด้วยแผนประกันสะสมทรัพย์ที่มั่นใจและคุ้มค่าที่สุด สร้างฐานความมั่นคงต่อเนื่อง"
      }
    ],
    images: ["/w4-1.jpg", "/w4-2.jpg"]
  },
  {
    name: "W5 : Junior Wealth",
    desc: "ลูกค้าที่มีอายุ < 40 ปี ในทุกอาชีพ",
    options: [
      {
        headline: "ออมมั่นคงกับชีวิตที่มั่นใจ",
        body: "เปิดการออมแบบมั่นใจสำหรับคนรุ่นใหม่ด้วย ttb ประกันสะสมทรัพย์ที่มั่นใจที่สุด สร้างอนาคตที่มั่นคงด้วยแผนต่อยอดธุรกิจง่ายและปลอดภัย"
      },
      {
        headline: "ออมวันนี้ เพื่อชีวิตมั่นคงสามสิบปีข้างหน้า",
        body: "อยากมั่นใจ อยากเติบโต หรืออยากวางแผนต่อยอดชีวิตด้วยแผนประกันสะสมทรัพย์ที่มั่นใจและคุ้มค่าที่สุด เริ่มต้นตั้งแต่วันนี้มั่นใจได้"
      }
    ],
    images: ["/w5-1.jpg", "/w5-2.jpg"]
  }
];

const GenerateKVSegmentForm: React.FC = () => {
  const [selectedSubSegments, setSelectedSubSegments] = React.useState<string[]>([]);
  const [filteredSegments, setFilteredSegments] = React.useState(segments);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [generatedImages, setGeneratedImages] = React.useState<{[key: string]: string}>({});
  const [isGeneratingImages, setIsGeneratingImages] = React.useState<{[key: string]: boolean}>({});
  const [showGeminiApiKeyModal, setShowGeminiApiKeyModal] = React.useState(false);
  const [geminiApiKey, setGeminiApiKey] = React.useState("");
  
  React.useEffect(() => {
    // โหลดข้อมูล sub-segments ที่เลือกจาก localStorage
    const savedSubSegments = localStorage.getItem('selectedSubSegments');
    if (savedSubSegments) {
      try {
        const parsed = JSON.parse(savedSubSegments);
        setSelectedSubSegments(parsed);
        
        // กรองเฉพาะ segments ที่ถูกเลือก
        const filtered = segments.filter(segment => 
          parsed.includes(segment.name)
        );
        setFilteredSegments(filtered);
        
        console.log('Selected sub-segments:', parsed);
        console.log('Filtered segments:', filtered);
      } catch (error) {
        console.error('Error parsing selected sub-segments:', error);
      }
    }
    
    // เช็คว่ามี Gemini API key หรือไม่
    const savedApiKey = localStorage.getItem('NEXT_PUBLIC_GOOGLE_AI_API_KEY');
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
    }
  }, []);

  const handleOptionSelect = (segmentName: string, optionIndex: number) => {
    const optionId = `${segmentName}_${optionIndex}`;
    setSelectedOptions(prev => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      } else {
        return [...prev, optionId];
      }
    });
  };
  
  const generateImageForSegment = async (segmentName: string, option: any, optionIndex: number) => {
    const currentApiKey = geminiApiKey || localStorage.getItem('NEXT_PUBLIC_GOOGLE_AI_API_KEY');
    
    if (!currentApiKey) {
      setShowGeminiApiKeyModal(true);
      return;
    }
    
    const imageKey = `${segmentName}_${optionIndex}`;
    setIsGeneratingImages(prev => ({ ...prev, [imageKey]: true }));
    
    try {
      // สร้าง prompt สำหรับ segment และ option นี้
      const prompt = `Create a professional Thai bank advertisement image for "${option.headline}". Target audience: ${segmentName}. Message concept: "${option.body}". Style should be modern, trustworthy, and appealing to Thai bank market. No text overlay or written content in the image. Focus on visual elements, symbols, and imagery that convey trust and financial security.`;
      
      const result = await generateImageWithGemini({
        prompt: prompt,
        apiKey: currentApiKey
      });
      
      if (result && result.imageUrl) {
        setGeneratedImages(prev => ({ ...prev, [imageKey]: result.imageUrl }));
        console.log(`Generated image for ${segmentName} option ${optionIndex}:`, result);
      }
    } catch (error) {
      console.error(`Failed to generate image for ${segmentName} option ${optionIndex}:`, error);
    } finally {
      setIsGeneratingImages(prev => ({ ...prev, [imageKey]: false }));
    }
  };
  
  const handleSaveGeminiApiKey = () => {
    if (geminiApiKey.trim()) {
      localStorage.setItem('NEXT_PUBLIC_GOOGLE_AI_API_KEY', geminiApiKey.trim());
      setShowGeminiApiKeyModal(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Gemini API Key Modal */}
      {showGeminiApiKeyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Enter Google AI API Key</h2>
            <p className="text-gray-600 mb-6">Please enter your Google AI API key to generate images with Gemini.</p>
            <input
              type="password"
              value={geminiApiKey}
              onChange={(e) => setGeminiApiKey(e.target.value)}
              placeholder="Your Google AI API Key"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-3">
              <button
                onClick={handleSaveGeminiApiKey}
                disabled={!geminiApiKey.trim()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700"
              >
                Save
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
        <section className="p-8 flex flex-col gap-6 max-w-7xl mx-auto">
          <div className="mb-4">
            <h2 className="font-semibold text-xl text-[#2563EB] mb-2">KV Option</h2>
            <input type="text" className="border border-[#E5E7EB] rounded-lg px-3 py-2 w-full mb-2" value="Option 1+2" readOnly />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-[#1A202C] mb-2">
              {filteredSegments.length > 0 ? `${filteredSegments.length} Selected Segments` : '5 Segments'}
            </h3>
            {selectedSubSegments.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <div className="text-sm font-medium text-blue-800 mb-2">Selected Sub-Segments from Create Campaign Form:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedSubSegments.map((segment, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {filteredSegments.length === 0 && (
              <div className="text-[#F59E42] text-sm mb-4">
                ไม่มี sub-segments ที่เลือก กรุณากลับไปเลือก sub-segments ในหน้า Create Campaign Form
              </div>
            )}
            {filteredSegments.map((segment, idx) => (
              <div key={idx} className="mb-8">
                <div className="font-semibold text-[#2563EB] mb-1 flex items-center gap-2">
                  <span>{segment.name}</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Selected</span>
                  <span className="text-[#4B5563] font-normal text-sm">{segment.desc}</span>
                </div>
                <div className="flex gap-6">
                  {segment.options.map((option, oidx) => {
                    const optionId = `${segment.name}_${oidx}`;
                    return (
                      <label key={oidx} className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-2 w-1/2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="accent-[#2563EB] mb-2" 
                          checked={selectedOptions.includes(optionId)}
                          onChange={() => handleOptionSelect(segment.name, oidx)}
                        />
                        <div className="flex gap-2 items-start mb-2">
                          <div className="w-32 h-32 rounded-lg border border-gray-200 flex flex-col items-center justify-center bg-gray-50">
                            {(() => {
                              const imageKey = `${segment.name}_${oidx}`;
                              const isGenerating = isGeneratingImages[imageKey];
                              const generatedImage = generatedImages[imageKey];
                              
                              if (isGenerating) {
                                return (
                                  <div className="text-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                                    <div className="text-xs text-gray-500">กำลังสร้าง...</div>
                                  </div>
                                );
                              }
                              
                              if (generatedImage) {
                                return <img src={generatedImage} alt="Generated" className="rounded-lg w-full h-full object-cover" />;
                              }
                              
                              return (
                                <button
                                  onClick={() => generateImageForSegment(segment.name, option, oidx)}
                                  className="text-center p-2 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  <div className="text-2xl mb-1">🖼️</div>
                                  <div className="text-xs text-gray-600">สร้างรูป</div>
                                </button>
                              );
                            })()}
                          </div>
                          <div>
                            <div className="font-semibold text-[#F59E42] mb-1">Headline</div>
                            <div className="bg-[#F3F6FB] rounded-lg px-2 py-1 mb-2 text-[#1A202C] text-sm">{option.headline}</div>
                            <div className="font-semibold text-[#F59E42] mb-1">Body Copy</div>
                            <div className="bg-[#F3F6FB] rounded-lg px-2 py-1 text-[#4B5563] text-sm">{option.body}</div>
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Link href="/generate-kv">
              <button className="bg-[#F3F6FB] text-[#2563EB] px-8 py-2 rounded-lg font-semibold text-lg">Previous</button>
            </Link>
            <button 
              className="bg-[#2563EB] text-white px-8 py-2 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={selectedOptions.length === 0}
              onClick={() => {
                // บันทึกข้อมูลที่เลือกลง localStorage
                const selectedKVData = {
                  selectedSubSegments: selectedSubSegments,
                  selectedOptions: selectedOptions,
                  timestamp: new Date().toISOString()
                };
                localStorage.setItem('selectedKVOptions', JSON.stringify(selectedKVData));
                console.log('Selected KV options saved:', selectedKVData);
                // Navigate to next page (ใส่ตาม flow ของคุณ)
                alert(`Selected ${selectedOptions.length} KV options!`);
              }}
            >
              Next ({selectedOptions.length} selected)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GenerateKVSegmentForm;
