"use client";

import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6">

      {/* Title */}
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-red-600 truncate">
        Admin Dashboard
      </h1>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-500 hover:text-red-700 transition text-sm sm:text-base"
      >
        <FiLogOut size={20} />
        <span className="hidden sm:inline">Logout</span>
      </button>

    </header>
  );
}