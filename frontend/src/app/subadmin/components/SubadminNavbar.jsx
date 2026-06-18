"use client";

import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function SubAdminNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("subadminToken");
    router.push("/subadmin/login");
  };

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      <div className="flex items-center gap-3 min-w-0">
        <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-md shrink-0">
          <ShieldCheck size={18} />
        </span>
        <div className="min-w-0">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 truncate">
            Sub Admin Dashboard
          </h1>
          <p className="hidden sm:block text-xs text-slate-500">
            Operations panel
          </p>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 px-3 py-2 transition text-sm font-medium"
      >
        <FiLogOut size={18} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </header>
  );
}