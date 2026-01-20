import { apiPost } from "./api";
import { setAuth, clearAuth, getAuth } from "./storage";

/**
 * مثال تسجيل دخول
 * بدّلي /login مع API الحقيقي عندك
 */
export async function login(email, password) {
  // مثال: const data = await apiPost("/login", { email, password });
  // حالياً mock:
  const data = { token: "demo-token", user: { email } };

  setAuth(data);
  return data;
}

export function logout() {
  clearAuth();
}

export function isLoggedIn() {
  return !!getAuth()?.token;
}

/**
 * تحويل للـ Flutter Dashboard
 * غيّري الرابط حسب مكان الداش عندك
 */
export function goToDashboard() {
  window.location.href = "https://dashboard.strx.ps/";
  // أو لو على نفس الدومين:
  // window.location.href = "/app/";
}
