import { Outlet, Link } from "react-router-dom";
const DASH_URL = "https://strx.ps/dashboard/#/stores";
const LOGIN_URL = "https://strx.ps/x/?redirect=" + encodeURIComponent(DASH_URL);
export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="font-semibold">STRX</Link>
          <nav className="text-sm text-gray-600">
           <a className="hover:text-black" href={LOGIN_URL}>Login</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
