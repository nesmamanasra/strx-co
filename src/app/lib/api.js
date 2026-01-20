// عدّلي baseURL لاحقًا على API تبعك
const baseURL = "/api";

export async function apiPost(path, body) {
  const res = await fetch(baseURL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || "Request failed");
  return data;
}
