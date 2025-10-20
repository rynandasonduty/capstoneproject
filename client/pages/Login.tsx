import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login gagal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#0F172A] mx-auto mb-6">
            <span className="text-white font-bold text-2xl">WRP</span>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 text-[#0F172A]">
            Masuk
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Selamat datang di Watering Route Planner
          </p>

          {error && (
            <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#E5E7EB] text-[#0F172A] focus:ring-[#0F172A]"
                />
                <span className="text-gray-700">Ingat saya</span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-[#0F172A] hover:underline font-medium"
              >
                Lupa password?
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 disabled:opacity-50"
            >
              {isLoading ? "Sedang masuk..." : "Masuk"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Atau</span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Belum memiliki akun?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[#0F172A] font-semibold hover:underline"
            >
              Daftar di sini
            </button>
          </p>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Demo: Gunakan email apapun dengan password apapun
        </p>
      </div>
    </div>
  );
}
