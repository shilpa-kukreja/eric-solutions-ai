"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  UserCheck,
  Users,
  House,
  Logs,
  NotebookTabs,
  Images,
  ChevronLeft,
  Menu,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <House size={20} /> },
    { name: "Contacts", path: "/admin/contacts", icon: <Users size={20} /> },
    { name: "Subscribers", path: "/admin/subscribers", icon: <UserCheck size={20} /> },
    { name: "Blogs", path: "/admin/blog", icon: <NotebookTabs size={20} /> },
    { name: "Blog List", path: "/admin/bloglist", icon: <Logs size={20} /> },
    { name: "Sliders", path: "/admin/sliders", icon: <Images size={20} /> },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
{/* MOBILE TOP BAR */}
<div className="md:hidden flex items-center h-14 bg-gray-900 text-white px-4">

  {/* Hamburger */}
  <button
    onClick={() => setMobileOpen(true)}
    className="flex items-center justify-center"
  >
    <Menu size={26} />
  </button>

</div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed md:relative z-50
        ${collapsed ? "w-20" : "w-64"}
        ${mobileOpen ? "left-0" : "-left-full md:left-0"}
        min-h-screen
        bg-gray-900
        text-white
        transition-all duration-300
        p-4
      `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          {!collapsed && (
            <Image
              src="/logo.gif"
              width={140}
              height={60}
              alt="logo"
            />
          )}

          {/* COLLAPSE BUTTON */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:block"
          >
            <ChevronLeft
              className={`transition ${collapsed ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* MENU */}
        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                pathname === item.path
                  ? "bg-[#a13045]"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.icon}

              {!collapsed && (
                <span className="text-sm">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}