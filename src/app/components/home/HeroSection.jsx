import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <Container className="py-10 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image (يسار في التصميم) */}
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="/hero-illustration.svg"
              alt="STRX Hero"
              className="w-full max-w-md lg:max-w-xl"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 text-center lg:text-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B5A49]">
              منصة انشاء متاجر
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-gray-700 leading-relaxed">
              خلال ٥ دقائق فقط، متجرك الإلكتروني يصبح جاهزاً
              <br className="hidden sm:block" />
              لتبدأ البيع وإدارة أعمالك بثقة
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#start"
                className="rounded-full bg-[#0B5A49] px-10 py-4 text-white text-lg font-semibold hover:bg-[#094C3E]"
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
