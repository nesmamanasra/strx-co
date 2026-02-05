// src/components/home/TwoInfoSections.jsx
export default function TwoInfoSections() {
  return (
    <div dir="rtl" className="w-full">
      {/* Section 1 (green banner) */}
      <section className="w-full  bg-gradient-to-l from-[#062C24] to-[#075B4A] h-70">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-4xl font-semibold text-white mb-10 mt-10">
              حول فكرتك إلى متجر إلكتروني ناجح اليوم
            </h2>

            <button
              type="button"
              className="mt-5 inline-flex items-center justify-center rounded-[20px] bg-white px-8 py-4 text-sm font-semibold text-[#0A3F36] shadow-sm hover:opacity-95"
            >
              ابدأ الآن
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 (white banner) */}
      <section className="w-full bg-white  h-70">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
           
            {/* Right text */}
            <div className="sm:order-2 text-right">
              <h3 className="text-lg sm:text-2xl font-semibold text-[#2B2B2B]">
                انضم لأكثر من <span className="font-extrabold">+1000</span> تاجر
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6B6B6B]">
                ابدأ الآن مجاناً لمدة شهر، وحوّل متجرك ينطلق بقوة!
              </p>
            </div>

             {/* Left button */}
            <div className="sm:order-1">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-[20px] bg-gradient-to-l from-[#062C24] to-[#075B4A] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                ابدأ مجاناً
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
