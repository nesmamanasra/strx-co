import Container from "../ui/Container";

function StatCard({ title, value, note, bgClass }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 text-white ${bgClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>

      <div className="mt-10 text-sm opacity-95">{note}</div>

      {/* دوائر خفيفة */}
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-white/12" />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white">
      <Container className="py-14 lg:py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black">ما يميزنا</h2>
          <p className="mt-4 text-2xl text-gray-600">احصائيات سريعة وفعالة مع كل طلبية</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="الطلبات الشهرية"
            value="5"
            note="زيادة %25"
            bgClass="bg-gradient-to-l from-[#FF9A8B] to-[#FF6A88]"
          />
          <StatCard
            title="الزوار على المتجر"
            value="425"
            note="انخفاض %8"
            bgClass="bg-gradient-to-l from-[#4DD6C6] to-[#33C7B7]"
          />
          <StatCard
            title="المبيعات الشهرية"
            value="₪ 1180"
            note="زيادة %556"
            bgClass="bg-gradient-to-l from-[#59A9FF] to-[#2F86F6]"
          />
        </div>
      </Container>
    </section>
  );
}
