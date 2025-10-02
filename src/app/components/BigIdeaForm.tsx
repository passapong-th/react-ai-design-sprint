import React from "react";
import Link from "next/link";

const bigIdeas = [
  {
    title: "Pain–Agitate–Solve (สำหรับผู้ที่กังวลเรื่องการออม)",
    desc: "ออมเงินตั้งนาน แต่ทำไมออมไม่ถึงเป้า? หลายคนมองว่าผลลัพธ์ระยะยาวดูห่างตัวต่างคิดตามแผนและอาจหมดแรงบันดาลใจเอง ttb ช่วยเสนอแผนประกันสะสมทรัพย์ที่คุ้มครองและต่อยอดผลตอบแทนที่ก้าวไกลได้ พร้อมประกันสะสมทรัพย์ดูแลและตอบแทนมากกว่าผลได้! เป้าหมายเดิมแต่มั่นใจขึ้น!"
  },
  {
    title: "Before–After–Bridge (สำหรับผู้ที่ต้องการความมั่นคงในชีวิต)",
    desc: "หลายคนกังวลว่าการออมเงินเพื่ออนาคตคุณจะมีอยู่ตลอดและไม่คุ้มกัน จนกระทั่งมีตัวช่วยเปลี่ยนทุกสถานการณ์ให้กลายเป็นกระแสประกันต่อการเงินที่คุ้มกว่าเดิม แต่สำหรับผู้ที่มี ttb ประกันสะสมทรัพย์ ชีวิตจะเปลี่ยนไปอย่างมั่นใจขึ้น!"
  },
  {
    title: "Social Proof (สำหรับผู้ที่ต้องการความน่าเชื่อถือ)",
    desc: "ทำไม ttb ประกันสะสมทรัพย์ถึงได้รับความไว้วางใจ? เพราะเรามีการรับรองจากสถาบันชั้นนำและมีผลตอบแทนที่ตรวจสอบได้จริงเป็นลำดับก่อน พร้อมประสิทธิภาพของผลิตภัณฑ์ที่มากกว่าผลิตภัณฑ์คู่แข่งหลายเท่าและประสบการณ์จริงจากการรีวิวจริงว่าการออมแบบนี้ดีที่สุด! หากคุณต้องการออมอย่างมั่นใจ นี่คือสิ่งที่คุณต้องมี!"
  },
  {
    title: "Guarantee/No-Risk (สำหรับผู้ที่กังวลความเสี่ยง)",
    desc: "หนึ่งในเหตุผลหลักที่คนลังเลเรื่องประกันคือความเสี่ยง 'ความไม่แน่นอน' และความกลัวว่าจะขาดทุนหรือผลตอบแทนเป็นศูนย์ แต่ ttb ให้ผลตอบแทนที่คุ้มค่าแก่ผู้ที่กล้าให้ 'การรับประกันคืนทุนทุกปี' ในปีที่ต้องออมตามแผนประกันสะสมทรัพย์ ไม่มีคำว่าขาดทุน มีแต่คำว่ามั่นใจ! การออมวันนี้มีแต่ได้! กระจายความเสี่ยงให้มั่นใจขึ้น แต่มีความคุ้มค่ามากขึ้นตามแผนประกันที่มั่นใจได้!"
  },
  {
    title: "How-To/Education (สำหรับผู้ที่ต้องการความรู้)",
    desc: "อยากออมเงินแต่ยังไม่รู้ต้องเริ่มยังไง ไม่กล้าตัดสินใจ ttb ประกันสะสมทรัพย์ทุกคนแนะนำวิธีออมแบบที่ตอบโจทย์ผู้สนใจที่ต้องการวางแผนการเงินได้อย่างมั่นใจตั้งแต่เริ่มต้น เรียนรู้ทุกขั้นตอนง่ายๆ ช่วยวางแผนการออมแบบมั่นใจและสามารถนำเงินตรงตามเป้าหมาย!"
  }
];

const BigIdeaForm: React.FC = () => {
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
        <section className="p-8 flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="mb-4">
            <h2 className="font-semibold text-xl text-[#2563EB] mb-2">AI Big Idea</h2>
            <div className="text-lg font-semibold text-[#1A202C] mb-2">Campaign name : ประกันสะสมทรัพย์</div>
            <div className="text-[#2563EB] mb-2">เลือกไอเดียที่ชอบ (สามารถเลือกได้มากกว่า 1 ไอเดีย)</div>
          </div>
          <form className="flex flex-col gap-4">
            {bigIdeas.map((idea, idx) => (
              <label key={idx} className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex gap-4 items-start cursor-pointer">
                <input type="checkbox" className="accent-[#2563EB] mt-1" />
                <div>
                  <div className="font-semibold text-[#1A202C] mb-1">{idea.title}</div>
                  <div className="text-[#4B5563] text-sm">{idea.desc}</div>
                </div>
              </label>
            ))}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-2">
              <label className="font-medium text-[#4B5563] mb-1">Input เพิ่มเติม</label>
              <input type="text" className="border border-[#E5E7EB] rounded-lg px-3 py-2" placeholder="Input เพิ่มเติมหากต้องการใส่ Requirement เพิ่มเติม" />
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
