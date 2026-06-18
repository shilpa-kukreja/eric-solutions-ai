"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  NotebookTabs,
  Images,
  ChevronLeft,
  ChevronDown,
  Menu,
  BriefcaseBusiness,
  ShoppingCart,
  User,
  ShoppingBasket,
  Mail,
  Sparkles,
  Users,
  Newspaper,
  UserRoundCog,
  Hourglass,
  UserRoundSearch,
  UserCheck,
  Contact
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subadmin, setSubadmin] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("subadminData");
    if (data) {
      setSubadmin(JSON.parse(data));
    }
  }, []);

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <div className="md:hidden flex items-center justify-between h-14 bg-slate-900 text-white px-4 border-b border-slate-800">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
        >
          <Menu size={26} />
        </button>
        <p className="text-sm font-medium tracking-wide">Subadmin Panel</p>
        <span className="w-7" />
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
        fixed md:relative z-50
        ${collapsed ? "w-[88px]" : "w-72"}
        ${mobileOpen ? "left-0" : "-left-full md:left-0"}
        min-h-screen
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white
        transition-all duration-300 p-4 border-r border-slate-800 shadow-2xl
      `}
      >
        <div className="flex items-center justify-between mb-6 px-1">
          {!collapsed && subadmin && (
            <div className="bg-white/10 p-3 rounded-xl w-full border border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${subadmin.profileImg.replace(/\\/g, "/")}`}
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-emerald-500 object-cover"
                  alt="subadmin"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {subadmin.fullName}
                  </p>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Sparkles size={12} />
                    Verified access
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-2 truncate flex items-center gap-1.5">
                <Mail size={12} />
                {subadmin.email}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors ml-2"
          >
            <ChevronLeft
              className={`transition ${collapsed ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
        </div>

        <nav className="space-y-1.5">
          <Link
            href="/subadmin/dashboard"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/subadmin/dashboard")
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <House size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Dashboard</span>
            )}
          </Link>

          {/* articles */}
          <div>
            <button
              type="button"
              onClick={() => toggleMenu("articles")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <Newspaper size={20} />
                {!collapsed && (
                  <span className="text-sm font-medium">Articles</span>
                )}
              </div>

              {!collapsed && (
                <ChevronDown
                  className={`transition ${
                    openMenu === "articles" ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              )}
            </button>

            {openMenu === "articles" && !collapsed && (
              <div className="ml-7 mt-1 space-y-1 border-l border-white/15 pl-3">
                <Link
                  href="/subadmin/article/"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/products/add")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Add Article
                </Link>
                <Link
                  href="/subadmin/articlelist"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/products")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Article List
                </Link>
              </div>
            )}
          </div>

          {/* blogs */}
          <div>
            <button
              type="button"
              onClick={() => toggleMenu("blogs")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <NotebookTabs size={20} />
                {!collapsed && (
                  <span className="text-sm font-medium">Blogs</span>
                )}
              </div>

              {!collapsed && (
                <ChevronDown
                  className={`transition ${
                    openMenu === "blogs" ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              )}
            </button>

            {openMenu === "blogs" && !collapsed && (
              <div className="ml-7 mt-1 space-y-1 border-l border-white/15 pl-3">
                <Link
                  href="/subadmin/blog"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/blog")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Add Blog
                </Link>
                <Link
                  href="/subadmin/bloglist"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/bloglist")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Blog List
                </Link>
              </div>
            )}
          </div>

          {/* team */}
          <div>
            <button
              type="button"
              onClick={() => toggleMenu("team")}
              className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-slate-200 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <UserRoundCog size={20} />
                {!collapsed && (
                  <span className="text-sm font-medium">Team</span>
                )}
              </div>

              {!collapsed && (
                <ChevronDown
                  className={`transition ${
                    openMenu === "team" ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              )}
            </button>

            {openMenu === "team" && !collapsed && (
              <div className="ml-7 mt-1 space-y-1 border-l border-white/15 pl-3">
                <Link
                  href="/subadmin/team/add"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/blog")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Add Team Member
                </Link>
                <Link
                  href="/subadmin/team/list"
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    isActive("/subadmin/team/list")
                      ? "bg-emerald-500/90 text-white"
                      : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  Team Members List
                </Link>
              </div>
            )}
          </div>

          {/* Timeline */}
          <Link
            href="/subadmin/timeline/list"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/subadmin/timeline/list")
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Hourglass size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Timeline</span>
            )}
          </Link>

          <Link
            href="/subadmin/contacts"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/subadmin/contacts")
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <UserRoundSearch size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Contacts</span>
            )}
          </Link>

          <Link
            href="/subadmin/subscribers"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/subadmin/subscribers")
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <UserCheck size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Subscribers</span>
            )}
          </Link>

          {/* Timeline */}
          <Link
            href="/subadmin/footer-contact"
            className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
              isActive("/subadmin/footer-contact")
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            <Contact size={20} />
            {!collapsed && (
              <span className="text-sm font-medium">Footer Contact</span>
            )}
          </Link>
        </nav>
      </aside>
    </>
  );
}
