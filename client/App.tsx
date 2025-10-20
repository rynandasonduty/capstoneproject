import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Layout } from "@/components/Layout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Maps from "./pages/Maps";
import History from "./pages/History";
import About from "./pages/About";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Error500 from "./pages/Error500";
import Maintenance from "./pages/Maintenance";

const queryClient = new QueryClient();

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <ProtectedRoute>{children}</ProtectedRoute>
  </Layout>
);

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                <Route
                  path="/"
                  element={
                    <ProtectedLayout>
                      <Index />
                    </ProtectedLayout>
                  }
                />
                <Route
                  path="/maps"
                  element={
                    <ProtectedLayout>
                      <Maps />
                    </ProtectedLayout>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <ProtectedLayout>
                      <History />
                    </ProtectedLayout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedLayout>
                      <Profile />
                    </ProtectedLayout>
                  }
                />

                <Route
                  path="/about"
                  element={
                    <PublicLayout>
                      <About />
                    </PublicLayout>
                  }
                />
                <Route
                  path="/help"
                  element={
                    <PublicLayout>
                      <Help />
                    </PublicLayout>
                  }
                />

                <Route path="/500" element={<Error500 />} />
                <Route path="/maintenance" element={<Maintenance />} />

                <Route
                  path="*"
                  element={
                    <PublicLayout>
                      <NotFound />
                    </PublicLayout>
                  }
                />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
