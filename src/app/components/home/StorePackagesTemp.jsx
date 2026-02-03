import Container from "../ui/Container";

const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PackageCard = ({
  title,
  price,
  period,
  badge,
  buttonText,
  buttonVariant = "primary",
  features = [],
  isCurrent = false,
}) => {
  const buttonBase =
    "w-full rounded-2xl py-3 text-lg font-semibold transition active:scale-[0.99]";
  const buttonStyles =
    buttonVariant === "muted"
      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
      : "bg-emerald-200 text-emerald-900 hover:bg-emerald-300";

  return (
    <div className="relative rounded-3xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] px-8 py-7">
      {/* Badge */}
      <div className="flex items-center justify-center gap-20">
            <p className="text-lg font-extrabold text-gray-800">{title}</p>

            {badge ? (
              <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white shadow">
                {badge}
              </span>
            ) : null}
      </div>
      <div className="text-center">
        <div className="mt-3 flex items-end justify-center gap-2">
          <span className="text-4xl font-extrabold text-emerald-600">
            {price}
          </span>
          <span className="pb-1 text-lg font-semibold text-gray-600">
            {period}
          </span>
        </div>

        <button
          type="button"
          disabled={isCurrent}
          className={`${buttonBase} ${buttonStyles} mt-6`}
        >
          {buttonText}
        </button>
      </div>

     <div className="mt-7 space-y-4">
  {features.map((f, idx) => {
    const label = typeof f === "string" ? f : f.label;
    const ok = typeof f === "string" ? true : !!f.ok;

    return (
      <div
        key={idx}
        className="flex items-center justify-between gap-3 text-gray-700"
      >
        <span className="text-sm md:text-base">{label}</span>

        {ok ? (
          <span className="text-emerald-600">
            <CheckIcon />
          </span>
        ) : (
          <span className="text-red-500 text-xl font-extrabold leading-none">
            ✕
          </span>
        )}
      </div>
    );
  })}
</div>

      {/* Bottom green line like the design */}
      <div className="mt-7 h-[3px] w-full rounded-full bg-emerald-500/90" />
    </div>
  );
};

export default function StorePackages() {
  const features = [
    "عدد طلبات غير محدود",
    "عدد أصناف غير محدود",
    "تنبيهات واتساب عند الطلبات",
    "تقارير مبيعات واستهلاك الأصناف",
    "الوضع الداكن والفاتح",
  ];
  const freeFeatures = [
  { label: "15 طلبية شهريًا", ok: true },
  { label: "15 صنف فقط", ok: true },
  { label: "تنبيهات واتساب عند الطلبات", ok: true },
  { label: "تقارير مبيعات واستهلاك الأصناف", ok: false },
  { label: "الوضع الداكن والفاتح", ok: false },
];
  const packages = [
    {
      title: "الخطةالمجانية ",
      price: "$0.00",
      period: null,
      badge: null,
      buttonText: "الخطة الحالية",
      buttonVariant: "muted",
      isCurrent: true,
      features: freeFeatures,
    },
    {
      title: "الخطة الشهرية",
      price: "$19.9",
      period: "شهريا",
      badge: null,
      buttonText: "اشتراك",
      buttonVariant: "primary",
      isCurrent: false,
      features,
    },
    {
      title: "الخطة السنوية",
      price: "$191.9",
      period: "سنويًا",
      badge: "خصم %20",
      buttonText: "اشتراك",
      buttonVariant: "primary",
      isCurrent: false,
      features,
    },
  ];

  return (
    <section dir="rtl" className="w-full bg-[#f7f7f7] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900">
          باقات المتاجر
        </h2>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <PackageCard key={i} {...p} />
          ))}
        </div>
     

      {/* Bottom wide card */}
<div className="mt-10 rounded-3xl bg-white px-6 py-6 shadow-[0_18px_35px_rgba(0,0,0,0.10)]">
  <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row md:items-center">
    {/* Right text */}
    <div className="text-right">
      <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
        للطلبات الخاصة
      </h3>
      <p className="mt-1 text-sm md:text-base text-gray-500">
        نوفر لك احتياجاتك الخاصة لإنشاء متجرك الإلكتروني بشكل متكامل
      </p>
    </div>

    {/* Left button */}
  <div className="mt-8 flex justify-center lg:justify-start">
             <a
                href="#start"
                className="rounded-[23px] px-16 py-4 text-white text-[20px] font-semibold
                          bg-gradient-to-l from-[#062C24] to-[#075B4A]
                          hover:opacity-95 transition" >اتصل بنا  </a>
            </div>
  </div>
</div>
 </div>
    </section>
  );
}
