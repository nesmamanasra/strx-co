import { useMemo, useState } from "react";
import Container from "../ui/Container";

/**
 * PartnerStrx
 * - Slider simple (no libs)
 * - RTL layout
 * - 5 cards shown on desktop, responsive on smaller screens
 */
export default function PartnerStrx() {
  // ✅ استبدل الصور بروابط لوجوهاتك (png/svg)
  const partners = useMemo(
    () => [
      { id: 1, name: "Partner 1", logo: "/sahab.svg" },
      { id: 2, name: "CANTON", logo: "/canton.svg" },
      { id: 3, name: "K.I.Co.", logo: "/kio.svg" },
      { id: 4, name: "LAMSA", logo: "/lamsa.svg" },
      { id: 5, name: "Yafa", logo: "/yafa.svg" },
      { id: 5, name: "Yafa", logo: "/yafa.svg" },  
      // لو بدك أكثر من 5 عشان فعلاً يصير سلايدر
    
    ],
    []
  );

  // عدد الكروت الظاهرة (نخليها ثابتة 5 مثل التصميم على الديسكتوب)
  const visible = 4;

  // آخر index ممكن نوقف عنده
  const maxIndex = Math.max(0, partners.length - visible);

  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

    const onRight = () => setIndex((v) => Math.min(maxIndex, v + 1)); // ➜ يمين = لقدّام
    const onLeft  = () => setIndex((v) => Math.max(0, v - 1));       // ➜ يسار = رجوع

  // نقطتين مثل التصميم: قسمنا السلايدر لصفحتين
  const pages = maxIndex === 0 ? 1 : 2;
  const activeDot = maxIndex === 0 ? 0 : index === 0 ? 0 : 1;

  return (
    <section dir="rtl" className="w-full bg-white py-16">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          شركاؤنا في النجاح
        </h2>

        <div className="relative mt-10">
          {/* arrows */}
          <button
           onClick={onLeft}
            disabled={!canPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full flex items-center justify-center
              bg-lime-300 shadow-md transition
              ${canPrev ? "hover:opacity-90" : "opacity-40 cursor-not-allowed"}`}
          >
            {/* left arrow */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M14 7l-5 5 5 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"   
          onClick={onRight}
          disabled={!canNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10
            h-12 w-12 rounded-full flex items-center justify-center
            bg-lime-300 shadow-md transition
            ${canNext ? "hover:opacity-90" : "opacity-40 cursor-not-allowed"}`}
        >
            {/* right arrow */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M10 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* track */}
          <div className="overflow-hidden px-16">
           <div
              dir="ltr"
              className="flex gap-4 transition-transform duration-500"
              style={{ transform: `translateX(${index * 216}px)` }}
            >
              {partners.map((p) => (
                <PartnerCard key={p.id} name={p.name} logo={p.logo} />
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-5">
            {Array.from({ length: pages }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full border border-gray-300
                ${i === activeDot ? "bg-lime-400 border-lime-400" : "bg-white"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PartnerCard({ name, logo }) {
  return (
    <div
      className="shrink-0 w-[220px] h-[160px] rounded-2xl bg-white]
      flex flex-col items-center justify-center gap-3"
      title={name}
    >
      <img
        src={logo}
        alt={name}
        className="h-30 w-30 object-contain"
        loading="lazy"
      />

      {/* globe icon */}
      <div className="text-emerald-700">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 12h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
