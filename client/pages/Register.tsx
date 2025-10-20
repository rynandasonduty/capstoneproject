import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useNotification } from "@/hooks/use-notification";
import { registerSchema } from "@/lib/validation";
import { Eye, EyeOff, Check, X } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();
  const { success, error: notifyError } = useNotification();

  const passwordStrength = {
    hasMinLength: password.length >= 6,
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };

  const isPasswordValid =
    passwordStrength.hasMinLength &&
    passwordStrength.hasUpperCase &&
    passwordStrength.hasNumber;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = registerSchema.parse({
        name,
        email,
        password,
        confirmPassword,
      });

      setIsLoading(true);
      await register(validated.name, validated.email, validated.password);
      success("Registrasi berhasil!");
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
        const message = err instanceof Error ? err.message : "Registrasi gagal";
        notifyError(message);
      }
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
            Daftar
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Buat akun baru untuk memulai
          </p>

          {error && (
            <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama anda"
                className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                required
              />
            </div>

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
              <div className="relative mb-3">
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

              <div className="space-y-2 text-sm">
                <div
                  className={`flex items-center gap-2 ${
                    passwordStrength.hasMinLength
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {passwordStrength.hasMinLength ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  Minimal 6 karakter
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    passwordStrength.hasUpperCase
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {passwordStrength.hasUpperCase ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  1 huruf besar (A-Z)
                </div>
                <div
                  className={`flex items-center gap-2 ${
                    passwordStrength.hasNumber
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {passwordStrength.hasNumber ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  1 angka (0-9)
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Konfirmasi Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#E5E7EB] text-[#0F172A] focus:ring-[#0F172A]"
                required
              />
              <span className="text-sm text-gray-700">
                Saya setuju dengan{" "}
                <a href="#" className="text-[#0F172A] hover:underline font-medium">
                  Syarat dan Ketentuan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-[#0F172A] hover:underline font-medium">
                  Kebijakan Privasi
                </a>
              </span>
            </label>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 disabled:opacity-50"
            >
              {isLoading ? "Sedang mendaftar..." : "Daftar"}
            </Button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Sudah memiliki akun?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#0F172A] font-semibold hover:underline"
            >
              Masuk di sini
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
