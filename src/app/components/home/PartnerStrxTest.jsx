// src/components/home/PartnerStrx.jsx
import { useMemo, useState } from "react";
import Container from "../ui/Container";

/**
 * PartnerStrx
 * - RTL
 * - Smooth slider
 * - No half-cards / no blank space
 * - Loop (infinite by wrapping index)
 */
export default function PartnerStrx() {
  const partners = useMemo(
    () => [
      { id: 1, name: "Partner 1", logo: "/sahab.svg" },
      { id: 2, name: "CANTON", logo: "/canton.svg" },
      { id: 3, name: "K.I.Co.", logo: "/kio.svg" },
      { id: 4, name: "LAMSA", logo: "/lamsa.svg" },
      { id: 5, name: "Yafa", logo: "/yafa.svg" },
      // إذا بدك تزيد صور حط IDs مختلفة
      // { id: 6, name: "X", logo: "/x.svg" },
    ],
    []
  );

  // عدد الكروت الظاهرة (ديسكتوب)
  const visible = 4;

  // كم "خطوة" ممكن نمشي؟ (آخر index)
  const maxIndex = Math.max(0, partners.length - visible);

  const [index, setIndex] = useState(0);

  // Loop navigation (ما بوقف)
  const onRight = () => {
    setIndex((v) => (maxIndex === 0 ? 0 : v >= maxIndex ? 0 : v + 1));
  };

  const onLeft = () => {
    setIndex((v) => (maxIndex === 0 ? 0 : v <= 0 ? maxIndex : v - 1));
  };

  // dots = عدد الصفحات الحقيقي
  const pages = Math.max(1, maxIndex + 1);
  const activeDot = Math.min(index, pages - 1);

  return (
    <section dir="rtl" className="w-full bg-white py-16">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          شركاؤنا في النجاح
        </h2>

        <div className="relative mt-10">
          {/* left arrow */}
          <button
            type="button"
            onClick={onLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full flex items-center justify-center
              bg-lime-300 shadow-md transition hover:opacity-90"
          >
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

          {/* right arrow */}
          <button
            type="button"
            onClick={onRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full flex items-center justify-center
              bg-lime-300 shadow-md transition hover:opacity-90"
          >
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

          {/* viewport */}
          <div className="overflow-hidden px-16">
            {/* track (بنسبة % بدل px) */}
            <div
              dir="ltr"
              className="flex gap-4 transition-transform duration-500 will-change-transform"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {partners.map((p) => (
                <PartnerCard key={p.id} name={p.name} logo={p.logo} />
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-gray-300 transition
                  ${i === activeDot ? "bg-lime-400 border-lime-400" : "bg-white hover:bg-gray-100"}`}
                aria-label={`page ${i + 1}`}
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
      className="shrink-0 w-1/4 min-w-0 h-[160px] rounded-2xl bg-white
      flex flex-col items-center justify-center gap-3"
      title={name}
    >
      <img src={logo} alt={name} className="h-16 w-28 object-contain" loading="lazy" />

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
