// src/components/home/StatsSection.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "../ui/Container";

/* =========================
   Hook: detect in-view once
========================= */
function useInViewOnce(options = { threshold: 0.35 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // ✅ مرة وحدة فقط
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

/* =========================
   Hook: count up
========================= */
function useCountUp({ to = 0, start = false, duration = 900 }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const from = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);

      // easing (smooth)
      const eased = 1 - Math.pow(1 - t, 3);

      const next = Math.round(from + (to - from) * eased);
      setVal(next);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return val;
}

/* =========================
   Helpers
========================= */
function formatNumber(n) {
  // 1180 -> 1,180
  return new Intl.NumberFormat("en-US").format(n);
}

// parse value like: "₪ 1180" / "425" / "5"
function parseValue(valueStr) {
  const s = String(valueStr ?? "").trim();

  // prefix (any non-digit at start) e.g. "₪ "
  const prefixMatch = s.match(/^[^\d-]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";

  // number
  const numMatch = s.match(/-?\d+/);
  const num = numMatch ? Number(numMatch[0]) : 0;

  // suffix (any non-digit after number) optional
  const suffix = s.replace(prefix, "").replace(String(numMatch?.[0] ?? ""), "");

  return { prefix, num, suffix };
}

/* =========================
   Component
========================= */
export default function StatsSection() {
  const { ref: sectionRef, inView } = useInViewOnce({ threshold: 0.35 });

  const StatCard = ({ title, value, note, bgClass, icon }) => {
    const Icon = ({ type }) => {
      if (type === "doc") {
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path
              d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M14 3v4a2 2 0 0 0 2 2h4" stroke="white" strokeWidth="2" />
            <path d="M8 12h8M8 16h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      }

      if (type === "tag") {
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path
              d="M20 12l-8 8-10-10V2h8L20 12Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="7.5" cy="7.5" r="1.5" fill="white" />
          </svg>
        );
      }

      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M4 19V5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 19h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M7 14l3-3 3 3 5-6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="7" cy="14" r="1.3" fill="white" />
          <circle cx="10" cy="11" r="1.3" fill="white" />
          <circle cx="13" cy="14" r="1.3" fill="white" />
          <circle cx="18" cy="8" r="1.3" fill="white" />
        </svg>
      );
    };

    const { prefix, num, suffix } = useMemo(() => parseValue(value), [value]);

    // ✅ يبدأ العد لما السيكشن يدخل الشاشة
    const animated = useCountUp({ to: num, start: inView, duration: 2000 });

    return (
  <div
  className={[
    "relative isolate overflow-hidden rounded-[10px] p-6 text-white shadow-lg",
    "h-[210px]",
    // ✅ hover zoom
    "transform-gpu transition duration-300 ease-out",
    "hover:scale-[1.04] hover:-translate-y-1 hover:shadow-2xl",
    "active:scale-[1.01]",
    bgClass,
  ].join(" ")}
  dir="rtl"
>
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-white/15" />
        <div className="pointer-events-none absolute right-10 -bottom-12 h-40 w-40 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute right-[-30px] top-[-40px] h-40 w-40 rounded-full bg-white/10" />

        <div className="absolute left-5 top-5">
          <Icon type={icon} />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="text-lg font-semibold">{title}</div>

          {/* ✅ الرقم المتحرك */}
          <div className="text-3xl font-extrabold tabular-nums">
            {prefix}
            {formatNumber(animated)}
            {suffix}
          </div>

          <div className="text-sm font-medium opacity-90">{note}</div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-white">
      <Container className="py-10 sm:py-14 lg:py-16 mb-15">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black">ما يميزنا</h2>
          <p className="mt-4 text-2xl font-medium text-gray-500">
            احصائيات سريعة وفعالة مع كل طلبية
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="المبيعات الشهرية"
            value="₪ 1180"
            note="زيادة %556"
            bgClass="bg-gradient-to-l from-[#59A9FF] to-[#2F86F6]"
            icon="chart"
          />
          <StatCard
            title="الزوار على المتجر"
            value="425"
            note="انخفاض %8"
            bgClass="bg-gradient-to-l from-[#4DD6C6] to-[#33C7B7]"
            icon="tag"
          />
          <StatCard
            title="الطلبات الشهرية"
            value="5"
            note="زيادة %25"
            bgClass="bg-gradient-to-l from-[#FF9A8B] to-[#FF6A88]"
            icon="doc"
          />
        </div>
      </Container>
    </section>
  );
}
