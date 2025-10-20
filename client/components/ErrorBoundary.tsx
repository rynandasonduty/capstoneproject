import React, { Component, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: { componentStack: string } | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    this.setState({
      error,
      errorInfo,
    });

    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-[0_4px_4px_0_rgba(174,174,174,0.25)]">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>

              <h1 className="text-2xl font-bold text-center mb-2 text-[#0F172A]">
                Oops! Ada Kesalahan
              </h1>
              <p className="text-center text-gray-600 mb-4">
                Aplikasi mengalami kesalahan yang tidak terduga.
              </p>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200">
                  <p className="text-xs font-mono text-red-800 break-all">
                    {this.state.error.message}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2 text-xs text-red-700">
                      <summary className="cursor-pointer font-semibold">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 overflow-auto max-h-40 text-red-700">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <Button
                onClick={this.handleReset}
                className="w-full h-12 rounded-md bg-[#0F172A] text-white font-medium hover:bg-[#0F172A]/90"
              >
                Kembali ke Beranda
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
