import { useState } from "react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { login, goToDashboard } from "../lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      goToDashboard();
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto max-w-md space-y-4">
      <h1 className="text-xl font-semibold">Login</h1>

      <form onSubmit={onSubmit} className="space-y-3">
        <div className="space-y-1">
          <div className="text-sm text-gray-600">Email</div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@strx.ps"
          />
        </div>

        <div className="space-y-1">
          <div className="text-sm text-gray-600">Password</div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}

        <Button className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <p className="text-xs text-gray-500">
        حالياً Login mock. بعدين بنربطه بـ API الحقيقي.
      </p>
    </Card>
  );
}
