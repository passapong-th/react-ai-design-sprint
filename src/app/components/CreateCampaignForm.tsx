"use client";
import React from "react";
import { callChatGPT, extractTopics } from "../logics/ai";
import { AI_CONFIG } from "../config/ai.config";
import Link from "next/link";

const CreateCampaignForm: React.FC = () => {
  const handleUpload = async () => {
    // Mock data from form (replace with state if making dynamic)
    const product = "ประกันสะสมทรัพย์";
    const selling_point = "คุ้มครองชีวิตและเงินออมระยะยาว";
    const objective = "เพิ่มยอดขายและ lead";
    const target = "W1 : Senior – Business Owner, W2 : Senior – Professional";
    try {
      const response = await callChatGPT({
        product,
        selling_point,
        objective,
        target,
        apiKey: "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" 
      });
      console.log("ChatGPT response:", response);
      // สมมติ response.data.choices[0].message.content คือ string ที่ต้องการ
      const content = response?.choices?.[0]?.message?.content || "";
      const filtered = extractTopics(content);
      console.log("Filtered topics:", filtered);
    } catch (err) {
      console.error("ChatGPT error:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col py-6 px-4">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-bold text-[#1A202C] text-lg">AI MKT</span>
        </div>
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F6FB] text-[#1A202C] font-medium">
            <span>Content</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#4B5563] hover:bg-[#F3F6FB]">
            <span>Report</span>
          </button>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[#F7FAFC]">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-[#1A202C]">Create</span>
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
  <section className="p-8 flex flex-col gap-6 max-w-7xl">
          {/* Information */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 w-full mx-auto">
            <h2 className="font-semibold text-lg mb-4 text-[#1A202C]">Information</h2>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Campaign name*</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="โฆษณาประกันสะสมทรัพย์" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Product/Service</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="ประกันสะสมทรัพย์" readOnly />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <span className="text-sm font-medium text-[#4B5563]">Customer Target*</span>
              <label className="flex items-center gap-2">
                <input type="radio" checked readOnly className="accent-[#2563EB]" />
                <span>Ecosystem</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" readOnly className="accent-[#2563EB]" />
                <span>Non Ecosystem</span>
              </label>
            </div>
          </div>
          {/* Ecosystem */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#1A202C]">Ecosystem</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" checked readOnly className="accent-[#2563EB]" />
                  <span>Wealth</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" readOnly className="accent-[#2563EB]" />
                  <span>Home Owner</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" readOnly className="accent-[#2563EB]" />
                  <span>Car Owner</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" readOnly className="accent-[#2563EB]" />
                  <span>Salaryman</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-[#1A202C]">Ecosystem sub segment</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>W1 : Senior – Business Owner</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>W2 : Senior – Professional</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>W3 : Wealth – Business Owner</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>W4 : Wealth – Professional</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>W5 : Junior Wealth</span>
                </label>
              </div>
            </div>
          </div>
          {/* Requirement */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <h2 className="font-semibold text-lg mb-4 text-[#1A202C]">Requirement</h2>
            <div className="mb-4">
              <span className="text-sm font-medium text-[#4B5563]">Platform</span>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>Facebook</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="accent-[#2563EB]" />
                  <span>Instagram</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" readOnly className="accent-[#2563EB]" />
                  <span>Line</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" readOnly className="accent-[#2563EB]" />
                  <span>Pop-up</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" readOnly className="accent-[#2563EB]" />
                  <span>Pm Card</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Product/Service context</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="ประกัน" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Goals & Indication</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="วัดประเมินผลกับเป้าหมาย: [[Conversions|Leads|Messages|Traffic|Awareness]]" readOnly />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">รายละเอียด sub-segment เพิ่มเติม</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="20,000-50,000 / กรุงเทพฯ / มีรายงานวิดีโอ / 0-3 คน" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Mood and tone</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="โทนภาพ [เป็นกันเอง/มืออาชีพ/สนุก/พรีเมียม/จริงใจ]..." readOnly />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Language</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="ไทย/อังกฤษ" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-[#4B5563]">Mandatory</label>
                <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" value="Human-Readable: อัดแน่นควรสื่อและสาระตรงเน้น..." readOnly />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[#4B5563]">Output*</label>
              <textarea className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 h-24" readOnly value={"โฆษณาแคมเปญ 'ชุดครอบที่พร้อมส่งเมื่อโอนครบ' ดังนี้:\n5.1 ชุดคอนเทนต์แนะนำเทมเพลต ต่างต่อยอด 5 เวอร์ชั่น\nสำหรับแต่ละเวอร์ชั่น ให้มี:\nPrimary Text 3 (ความยาว...)\n..."}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[#4B5563]">Insight</label>
              <input type="text" className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2" placeholder="Description" readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-[#4B5563]">Upload</label>
              <div className="border-2 border-dashed border-[#2563EB] rounded-lg p-6 flex flex-col items-center justify-center bg-[#F3F6FB]">
                <span className="text-[#4B5563] mb-2">สามารถ drag and drop เพื่ออัปโหลดไฟล์ .xls, .word, .pdf</span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/big-idea">
                <button className="bg-[#2563EB] text-white px-8 py-2 rounded-lg font-semibold text-lg" onClick={handleUpload}>Next</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateCampaignForm;
