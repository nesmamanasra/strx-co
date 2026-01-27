import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <Container className="mt-10 sm:mt-8 lg:mt-20 py-10 sm:py-14 lg:py-16">
        <div dir="ltr" className="grid items-center gap-15 lg:grid-cols-2">
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
            <h1
                className="text-[34px] sm:text-[42px] lg:text-[52px] font-semibold
                          bg-gradient-to-l from-[#063A2F] to-[#075B4A]
                          bg-clip-text text-transparent"
              >
                منصة انشاء متاجر
              </h1>

            <p className="mt-6 text-[18px] sm:text-[20px] lg:text-[26px] text-gray-600 leading-[2.2] max-w-[520px] mx-auto lg:mx-0">
              خلال ٥ دقائق فقط، متجرك الإلكتروني يصبح جاهزاً
              <br />
              لتبدأ البيع وإدارة أعمالك بثقة
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
             <a
                href="#start"
                className="rounded-[30px] px-16 py-4 text-white text-[20px] font-semibold
                          bg-gradient-to-l from-[#063A2F] to-[#075B4A]
                          hover:opacity-95 transition"
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
