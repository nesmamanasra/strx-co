import Container from "../ui/Container";

export default function StatsSection() {
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

    return (
      <div
        className={[
          "relative isolate overflow-hidden rounded-2xl p-6 text-white shadow-lg",
          "h-[200px]",
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
          <div className="text-3xl font-extrabold">{value}</div>
          <div className="text-sm font-medium opacity-90">{note}</div>
        </div>
      </div>
    );
  };

  return (
<section className="bg-white">
      <Container className="py-10 sm:py-14 lg:py-16 mb-25">
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
