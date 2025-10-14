"use client";
import React from "react";
import { TopicsContext } from "./big-idea/TopicsContext";
import Link from "next/link";

const BigIdeaForm: React.FC = () => {
  const { topics } = React.useContext(TopicsContext);
  React.useEffect(() => {
    console.log('BigIdeaForm topics:', topics);
  }, [topics]);
  return (
    <div className="flex min-h-screen bg-[#F7FAFC]">
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
            <span className="text-xl font-semibold text-[#1A202C]">AI Big Idea</span>
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
        <section className="p-8 flex flex-col gap-6 w-full">
          <div className="mb-4">
            <h2 className="font-semibold text-xl text-[#2563EB] mb-2">AI Big Idea</h2>
            <div className="text-lg font-semibold text-[#1A202C] mb-2">Campaign name : ประกันสะสมทรัพย์</div>
            <div className="text-[#2563EB] mb-2">เลือกไอเดียที่ชอบ (สามารถเลือกได้มากกว่า 1 ไอเดีย)</div>
          </div>
          <form className="flex flex-col gap-4">
            {topics.map((topic, idx) => (
              <label key={idx} className="bg-white rounded-xl border border-[#E5E7EB] p-8 flex gap-6 items-start cursor-pointer w-full">
                <input type="checkbox" className="accent-[#2563EB] mt-1 scale-125" />
                <div className="w-full">
                  <div className="font-semibold text-[#1A202C] mb-3 text-lg">{topic.primaryText}</div>
                  {topic.headline && (
                    <div className="text-blue-600 text-base font-medium mb-3">
                      <span className="text-black">Headline:</span> {topic.headline}
                    </div>
                  )}
                  <div className="text-[#4B5563] text-base mb-3">
                    {topic.description && (
                      <span>
                        <span className="text-black">Description:</span> 
                        <span className="text-blue-600"> {topic.description}</span>
                      </span>
                    )}
                  </div>
                  {topic.hashtag && (
                    <div className="text-blue-500 text-base">
                      <span className="text-black">Hashtag:</span> {topic.hashtag}
                    </div>
                  )}
                </div>
              </label>
            ))}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 flex flex-col gap-2 w-full">
              <label className="font-medium text-[#4B5563] mb-1 text-base">Input เพิ่มเติม</label>
              <input type="text" className="border border-[#E5E7EB] rounded-lg px-4 py-3 text-base" placeholder="Input เพิ่มเติมหากต้องการใส่ Requirement เพิ่มเติม" />
            </div>
          </form>
          <div className="flex justify-between mt-6">
            <Link href="/">
              <button className="bg-[#F3F6FB] text-[#2563EB] px-8 py-2 rounded-lg font-semibold text-lg">Previous</button>
            </Link>
            <Link href="/generate-kv">
              <button className="bg-[#2563EB] text-white px-8 py-2 rounded-lg font-semibold text-lg">Next</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BigIdeaForm;
