import Container from "../ui/Container";

export default function Navbar({
  logoH = "4.0rem",      // حجم اللوغو
  linkFs = "1.4rem",     // حجم روابط nav
  btnFs = "1.4rem",      // حجم خط الزر
}) {
  return (
    <header className="text-white bg-gradient-to-l from-[#063A2F] to-[#075B4A]">
      <Container className="flex h-30 items-center justify-between">
        <img
          src="/strx-logo.svg"
          alt="STRX"
          style={{ height: logoH }}
          className="w-auto"
          draggable={false}
        />

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6" style={{ fontSize: linkFs }}>
            <a href="#about" className="hover:opacity-90">من نحن ؟</a>
            <a href="#login" className="hover:opacity-90">تسجيل الدخول</a>
          </nav>

          <a
            href="#start"
             className="ms-6 lg:ms-20 rounded-md bg-white px-5 py-2.5 font-semibold text-[#0B5A49] hover:bg-white/90"
            style={{ fontSize: btnFs }}
          >
            ابدأ مجاناً
          </a>
        </div>
      </Container>
    </header>
  );
}
