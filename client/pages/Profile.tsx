import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Mail, Calendar, Save } from "lucide-react";

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    updateProfile(name);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-6 lg:p-9 xl:p-[37px]">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-[32px] xl:text-[40px] font-bold text-[#0F172A]">
            Profil Anda
          </h1>
          <p className="text-gray-600 mt-2">
            Kelola informasi akun dan preferensi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="rounded-lg border border-[#E5E7EB] bg-white dark:bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mb-4">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-xl font-bold text-[#0F172A] break-all">
                  {user?.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 break-all">
                  {user?.email}
                </p>
                <div className="mt-6 pt-6 border-t border-[#E5E7EB] w-full">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Informasi Akun
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium text-gray-900 break-all">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-600">Bergabung</p>
                    <p className="font-medium text-gray-900">
                      {new Date().toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 xl:p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                Edit Profil
              </h2>

              {success && (
                <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200">
                  <p className="text-sm font-medium text-green-800">
                    ✓ Profil berhasil diperbarui
                  </p>
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0F172A] focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email (Read-only)
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-gray-50 text-gray-600 cursor-not-allowed"
                  />
                </div>

                <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Catatan:</strong> Untuk mengubah email, silakan
                    hubungi dukungan pelanggan kami.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSaving}
                  className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
                </Button>
              </form>
            </div>

            <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)] mt-6">
              <h2 className="text-xl font-bold text-[#0F172A] mb-4">
                Pengaturan Keamanan
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-[#E5E7EB] rounded-md">
                  <div>
                    <p className="font-medium text-gray-900">Ubah Password</p>
                    <p className="text-sm text-gray-600">
                      Perbarui password akun Anda secara berkala
                    </p>
                  </div>
                  <Button className="h-10 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90">
                    Ubah
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
