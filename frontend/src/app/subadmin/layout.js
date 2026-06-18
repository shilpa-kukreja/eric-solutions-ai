"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import SubAdminNavbar from "./components/SubadminNavbar";
import SubAdminSidebar from "./components/SubadminSidebar";

export default function subAdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const isLoginPage = pathname === "/subadmin/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("subadminToken");

    if (!token) {
      router.push("/subadmin/login");
    } else {
      setLoading(false);
    }
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (isLoginPage) {
    return children;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <SubAdminSidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1 w-full">

        {/* Navbar */}
        <SubAdminNavbar />

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-auto">
          {children}
        </main>

      </div>

    </div>
  );
}