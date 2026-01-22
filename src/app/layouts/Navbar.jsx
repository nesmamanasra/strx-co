import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="bg-[#0B5A49] text-white">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/strx-logo.svg"
            alt="STRX"
            className="h-10 w-auto"
          />
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-10 text-lg">
          <a href="#about" className="opacity-95 hover:opacity-100">من نحن:</a>
          <a href="#login" className="opacity-95 hover:opacity-100">تسجيل الدخول</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#start"
            className="rounded-lg bg-white px-5 py-2 text-[#0B5A49] font-semibold hover:bg-white/90"
          >
            ابدأ مجاناً
          </a>

          {/* Mobile menu placeholder */}
          <button className="md:hidden rounded-lg p-2 hover:bg-white/10">
            <span className="sr-only">menu</span>
            ☰
          </button>
        </div>
      </Container>
    </header>
  );
}
