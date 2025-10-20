import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNotification } from "@/hooks/use-notification";
import { loginSchema } from "@/lib/validation";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { success, error: notifyError } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = loginSchema.parse({ email, password });
      setIsLoading(true);

      await login(validated.email, validated.password);
      success("Login berhasil!");
      navigate("/");
    } catch (err: any) {
      if (err.errors) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error: any) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
        notifyError("Mohon periksa kembali form Anda");
      } else {
        const message = err instanceof Error ? err.message : "Login gagal";
        notifyError(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
          <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-[#0F172A] dark:bg-slate-700 mx-auto mb-6">
            <span className="text-white font-bold text-2xl">OK</span>
          </div>

          <h1 className="text-3xl font-bold text-center mb-2 text-[#0F172A] dark:text-white">
            Masuk
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Selamat datang di Web Optimasi Penyiraman
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0F172A] dark:focus:ring-blue-500 focus:border-transparent transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#E5E7EB] dark:border-slate-600 text-[#0F172A] dark:text-blue-500 focus:ring-[#0F172A] dark:focus:ring-blue-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Ingat saya
                </span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-[#0F172A] dark:text-blue-400 hover:underline font-medium"
              >
                Lupa password?
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-md bg-[#0F172A] dark:bg-blue-600 text-white font-medium hover:bg-[#0F172A]/90 dark:hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Sedang masuk..." : "Masuk"}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB] dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                Atau
              </span>
            </div>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            Belum memiliki akun?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[#0F172A] dark:text-blue-400 font-semibold hover:underline"
            >
              Daftar di sini
            </button>
          </p>
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Demo: Gunakan email apapun dengan password apapun
        </p>
      </div>
    </div>
  );
}
