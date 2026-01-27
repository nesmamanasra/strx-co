import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <Container className="py-10 sm:py-14 lg:py-16">
        <div dir="ltr" className="grid items-center gap-8 lg:grid-cols-2">
          {/* الصورة يسار */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/hero-illustration.svg"
              alt="منصة إنشاء متاجر"
              className="w-[260px] sm:w-[340px] lg:w-[420px] xl:w-[460px] h-auto"
              draggable={false}
            />
          </div>

          {/* النص يرجع RTL */}
          <div dir="rtl" className="text-center lg:text-right">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B5A49]">
              منصة انشاء متاجر
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              خلال ٥ دقائق فقط، متجرك الإلكتروني يصبح جاهزاً
              <br className="hidden sm:block" />
              لتبدأ البيع وإدارة أعمالك بثقة
            </p>

            <div className="mt-6 flex justify-center lg:justify-end">
              <a
                href="#start"
                className="rounded-full bg-[#0B5A49] px-8 py-3 text-white text-sm sm:text-base font-semibold hover:bg-[#094C3E]"
              >
                ابدأ الآن
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
