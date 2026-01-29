// src/sections/ServicesSection.jsx
import { Check } from "lucide-react";

const services = [
  {
    title: "تصاميم",
    desc: "نحوّل الأفكار إلى تصاميم تنبض بالحياة\nمع اللمس البصري السلس بدءاً إلى الفيديوهات الإعلانية",
     iconSrc: "/penTool.svg",
  },
  {
    title: "تسويق",
    desc: "نقدّم حلول تسويقية متكاملة تساعد علامات التجارة\nعلى الوصول إلى العملاء، تحسين زيادة التفاعل، وتعزيز المبيعات",
    iconSrc: "/barChart3.svg",
  },
  {
    title: "حلول برمجية",
    desc: "نقدّم حلول برمجية متكاملة تساعد لتلبية احتياجات أعمالك بكفاءة ومرونة\nمن تطوير التطبيقات والمواقع إلى أنظمة إدارة",
    iconSrc: "/code.svg",
  },
  {
    title: "متاجر إلكترونية",
    desc: "متجرك الإلكتروني هو واجهتك في العالم الرقمي ونحن نطوّره\nإلى منصة بيع متكاملة تعبّر عن هوية علامتك التجارية",
    iconSrc: "/stor.svg",
  },
];

export default function ServicesSection() {
  return (
    <section
      dir="rtl"
      className="w-full bg-[#F4F5F5] py-14 md:py-20"
      id="services"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col items-center gap-30 lg:flex-row lg:items-center lg:justify-between">

          {/* Right card */}
          <div className="relative w-full lg:w-[46%]">
            <div className="relative rounded-[36px] bg-white px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
              {/* Check badge */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-35">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8BC34A] shadow-[0_10px_25px_rgba(139,195,74,0.35)] ring-10 ring-white">
                  <Check className="h-10 w-10 text-white" strokeWidth={2} />
                </div>
              </div>

              <div className="space-y-8">
                {services.map((s, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-6">
                    {/* Icon */}
                    <div className="flex h-20 w-20 items-center justify-center">
                    <img
                            src={s.iconSrc}
                            alt={s.title}
                            className="h-20 w-20"
                            loading="lazy"
                            />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-extrabold text-[#8BC34A]">
                        {s.title}
                      </h3>
                      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#6B6B6B]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

                 {/* Left content */}
          <div className="w-full text-center lg:w-[48%] lg:text-right">
            <h2 className="text-4xl font-extrabold text-[#0B4D3D] md:text-5xl">
              خدمات الشركة
            </h2>

            <p className="mt-6 text-2xl font-medium leading-relaxed text-[#5E5E5E] md:text-3xl">
              خدماتنا صُممت لتسهيل رحلتك في التجارة
              <br />
              الإلكترونية من البداية حتى الاحتراف
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
             <a
                href="#start"
                className="rounded-[30px] px-16 py-4 text-white text-[20px] font-semibold
                          bg-gradient-to-l from-[#063A2F] to-[#075B4A]
                          hover:opacity-95 transition" >اتصل بنا  </a>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </section>
  );
}
