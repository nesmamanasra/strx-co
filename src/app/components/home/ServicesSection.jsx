// src/sections/ServicesSection.jsx
import { useEffect, useRef, useState } from "react";

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

/* ========= InView (start when section is visible) ========= */
function useInView(options = { threshold: 0.35 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

/* ========= Drawn Check (LEFT -> RIGHT) ========= */
function DrawCheck({ play }) {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" aria-hidden="true">
      <path
        // ✅ اتجاه الرسم صار من اليسار لليمين
        d="M4 12l5 5L20 6"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className={play ? "check-draw check-draw-play" : "check-draw"}
      />
    </svg>
  );
}

export default function ServicesSection() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.35 });

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="w-full bg-[#F4F5F5] py-14 md:py-20"
      id="services"
    >
      <style>{`
        .check-draw{
          stroke-dasharray: 0 1;
          stroke-dashoffset: 0;
        }
        .check-draw-play{
          animation: checkDraw 2.2s ease-in-out infinite;
        }
        @keyframes checkDraw{
          0%   { stroke-dasharray: 0 1; opacity: 0.9; }
          15%  { opacity: 1; }
          55%  { stroke-dasharray: 1 0; opacity: 1; }
          85%  { stroke-dasharray: 1 0; opacity: 1; }
          100% { stroke-dasharray: 0 1; opacity: 0.9; }
        }

        .badge-pop{
          transform: translateZ(0);
        }
        .badge-pop-play{
          animation: badgePop 2.2s ease-in-out infinite;
        }
        @keyframes badgePop{
          0%   { transform: scale(0.96); }
          35%  { transform: scale(1.06); }
          55%  { transform: scale(1.00); }
          100% { transform: scale(0.96); }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col items-center gap-30 lg:flex-row lg:items-center lg:justify-between">
          {/* Right card */}
          <div className="relative w-full lg:w-[46%]">
            <div className="relative rounded-[36px] bg-white px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
              {/* Check badge */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-35">
                <div
                  className={[
                    "badge-pop flex h-20 w-20 items-center justify-center rounded-full bg-[#8BC34A]",
                    "shadow-[0_10px_25px_rgba(139,195,74,0.35)] ring-10 ring-white",
                    inView ? "badge-pop-play" : "",
                  ].join(" ")}
                >
                  <DrawCheck play={inView} />
                </div>
              </div>

              <div className="space-y-4">
                {services.map((s, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-6">
                    <div className="flex h-20 w-20 items-center justify-center">
                      <img src={s.iconSrc} alt={s.title} className="h-20 w-20" loading="lazy" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-extrabold text-[#8BC34A]">{s.title}</h3>
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
            <h2 className="text-4xl font-extrabold text-[#0B4D3D] md:text-5xl">خدمات الشركة</h2>

            <p className="mt-6 text-2xl font-medium leading-relaxed text-[#5E5E5E] md:text-3xl">
              خدماتنا صُممت لتسهيل رحلتك في التجارة
              <br />
              الإلكترونية من البداية حتى الاحتراف
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#start"
                className="rounded-[23px] px-16 py-4 text-white text-[20px] font-semibold
                         bg-gradient-to-l from-[#062C24] to-[#075B4A]
                         hover:opacity-95 transition"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
