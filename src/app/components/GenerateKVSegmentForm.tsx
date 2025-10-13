import React from "react";
import Link from "next/link";

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
            <h3 className="font-semibold text-lg text-[#1A202C] mb-2">5 Segments</h3>
            {segments.map((segment, idx) => (
              <div key={idx} className="mb-8">
                <div className="font-semibold text-[#2563EB] mb-1">{segment.name} <span className="text-[#4B5563] font-normal text-sm">{segment.desc}</span></div>
                <div className="flex gap-6">
                  {segment.options.map((option, oidx) => (
                    <label key={oidx} className="bg-white rounded-xl border border-[#E5E7EB] p-6 flex flex-col gap-2 w-1/2 cursor-pointer">
                      <input type="checkbox" className="accent-[#2563EB] mb-2" />
                      <div className="flex gap-2 items-start mb-2">
                        <img src={segment.images[oidx]} alt="Image" className="rounded-lg w-32 h-32 object-cover" />
                        <div>
                          <div className="font-semibold text-[#F59E42] mb-1">Headline</div>
                          <div className="bg-[#F3F6FB] rounded-lg px-2 py-1 mb-2 text-[#1A202C] text-sm">{option.headline}</div>
                          <div className="font-semibold text-[#F59E42] mb-1">Body Copy</div>
                          <div className="bg-[#F3F6FB] rounded-lg px-2 py-1 text-[#4B5563] text-sm">{option.body}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Link href="/generate-kv-result">
              <button className="bg-[#F3F6FB] text-[#2563EB] px-8 py-2 rounded-lg font-semibold text-lg">Previous</button>
            </Link>
            <button className="bg-[#2563EB] text-white px-8 py-2 rounded-lg font-semibold text-lg">Next</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GenerateKVSegmentForm;
