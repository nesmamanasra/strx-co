// src/components/home/TwoInfoSections.jsx
export default function Footer() {
  return (
    <div dir="rtl" className="w-full">
      {/* Section 1 (green banner) */}
      <section className="w-full bg-gradient-to-l from-[#062C24] to-[#075B4A]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-2xl font-semibold text-white">
              حول فكرتك إلى متجر إلكتروني ناجح اليوم
            </h2>

            <button
              type="button"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-8 py-2 text-sm font-semibold text-[#0A3F36] shadow-sm hover:opacity-95"
            >
              ابدأ الآن
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
