import Container from "../ui/Container";

export default function SecuritySection() {
  return (
<section className="bg-white">
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="text-center">
          <h3 className="text-4xl font-bold text-black">أمان</h3>

          <div className="mt-6 flex justify-center">
            <div className="grid place-items-center h-60 w-60 rounded-2xl">
              <img 
               src="/safty.svg"
              className="text-6xl"
               />
            </div>
          </div>

          <p className="mt-1 text-4xl sm:text-5xl font-extrabold text-[#0B5A49]">
            سكرنا القفل وبلعنا المفتاح
          </p>
        </div>
      </Container>
    </section>
  );
}
