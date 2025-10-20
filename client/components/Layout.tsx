import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User, Home, Map, BarChart3, HelpCircle } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/", icon: Home },
    { label: "Maps", href: "/maps", icon: Map },
    { label: "History", href: "/history", icon: BarChart3 },
    { label: "Help", href: "/help", icon: HelpCircle },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b border-[#E5E7EB] dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div
              className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#0F172A] dark:bg-slate-700">
                <span className="text-white font-bold text-lg">WRP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-[#0F172A] dark:text-white">
                  Watering Route Planner
                </h1>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Surabaya City
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {isAuthenticated &&
                navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-[#0F172A] dark:bg-slate-700 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </button>
                ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <ThemeToggle />
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                    title="Profile"
                  >
                    <User className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <button
                    onClick={() => navigate("/login")}
                    className="px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#0F172A]/90 rounded-md transition-colors"
                  >
                    Register
                  </button>
                </div>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {isAuthenticated ? (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        navigate(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-[#0F172A] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-gray-100 rounded-md transition-colors text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#0F172A]/90 rounded-md transition-colors"
                  >
                    Register
                  </button>
                </>
              )}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[#E5E7EB] dark:border-slate-700 bg-gray-50 dark:bg-slate-900 mt-12 md:mt-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-9 xl:px-[37px] py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#0F172A] dark:text-white">
                Watering Route Planner
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sistem optimasi rute penyiraman taman kota Surabaya yang dirancang untuk meningkatkan efisiensi operasional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Produk</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/maps")}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Maps
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/history")}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    History
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Bantuan</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <button
                    onClick={() => navigate("/help")}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Hubungi Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Sosial Media</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#0F172A] dark:hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; 2024 Watering Route Planner. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#0F172A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0F172A] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
