export default function InfoSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-center">
          <div
            dir="rtl"
            className="w-full max-w-2xl rounded-3xl bg-[#F3F3F3] px-8 py-10 text-center"
          >
            <img
              src="/strxLogo.svg" // ضع اللوجو داخل public
              alt="STRX"
              className="mx-auto h-12 w-auto"
              draggable="false"
            />

            <p className="mt-6 text-[15px] leading-8 text-gray-700">
              هي منصة متكاملة لإنشاء وإدارة المتاجر الإلكترونية، تساعد أصحاب المشاريع
              على إطلاق متجرهم بسرعة وهوية احترافية
              <br />
              نوفر لك لوحة تحكم سهلة لإضافة المنتجات والخدمات وتنظيم الأقسام وإدارة
              الطلبات والعملاء وإصدار فواتير وتقارير تساعدك على متابعة المبيعات.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
