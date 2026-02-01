// src/components/home/ControlSection.jsx

export default function ControlSection() {
  const features = [
    {
      no: "1",
      title: "لا يهم مكانك",
      desc: "كل شيء جاهز من أي مكان. تحكم بكل أعمال المتجر مباشرة.",
      icon: "/c1.svg",
    },
    {
      no: "2",
      title: "تتحكم عبر الجوال",
      desc: "يمكنك التحكم بمتجرك أثناء عملية البيع، بدون تعقيد وبدون برامج.",
      icon: "/c2.svg",
    },
    {
      no: "3",
      title: "استلم طلباتك بسهولة",
      desc: "تابع طلباتك الجديدة وغيّر الحالات ونسّق مع العملاء بشكل سريع.",
      icon: "/c3.svg",
    },
    {
      no: "4",
      title: "إدارة المنتجات بشكل سلس",
      desc: "إضافة وتعديل المنتجات، والكميات، والتصنيفات… من لوحة تحكم واحدة.",
      icon: "/c4.svg",
    },
  ];

  return (
    <section dir="rtl" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
           
           {/* ================= RIGHT ================= */}
          <div className="text-right">
        
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0F4D3A] md:text-3xl">
              تحكم كامل في متجرك من مكان واحد
            </h2>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.no} className="text-right">
                  <div className="flex justify-end">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-[#0F4D3A]/15 shadow-sm">
                      <img
                        src={f.icon}
                        alt={f.title}
                        className="h-7 w-7 object-contain"
                        draggable="false"
                      />
                    </div>
                  </div>

                  <div className="mt-3 text-sm font-bold text-black/80">
                    {f.no}- {f.title}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= LEFT ================= */}
          {/* فقط عنوان + صورة SVG */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[34px] bg-[#F2F5F3] p-8">
              <div className="flex items-center justify-center gap-3">
                <h2 className="text-center text-lg font-semibold text-[#0F4D3A]">
                  لوحة تحكم سهلة وتناسبك
                </h2>

                <img
                  src="/control.svg"
                  alt="control"
                  className="h-100 w-100 object-contain"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}
