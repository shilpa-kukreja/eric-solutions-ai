"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  UserCheck,
  Users,
  House,
  Logs,
  NotebookTabs,
  ChevronLeft,
  Menu,
  Hourglass,
  HatGlasses,
  Contact,
  ChevronDown,
  List,
  UserRoundCog,
  SquarePlus,
  UserRoundPlus,
  Newspaper,
  UserRoundSearch
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState([]);

  const toggleGroup = (label) => {
    setExpandedGroups((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  const menuGroups = [
    // Groups with children
        { name: "Dashboard", path: "/admin/dashboard", icon: <House size={20} /> },

    {
      label: "Subadmin",
      icon: <HatGlasses size={20} />,
      children: [
        {
          name: "Add Subadmin",
          path: "/admin/subadmin/add",
          icon: <UserRoundPlus size={20} />,
        },
        {
          name: "Subadmin List",
          path: "/admin/subadmin/list",
          icon: <List size={20} />,
        },
      ],
    },
    {
      label: "Blogs",
      icon: <NotebookTabs size={20} />,
      children: [
        {
          name: "Add Blogs",
          path: "/admin/blog",
          icon: <SquarePlus size={20} />,
        },
        {
          name: "Blog List",
          path: "/admin/bloglist",
          icon: <Logs size={20} />,
        },
      ],
    },
    {
      label: "Articles",
      icon: <Newspaper  size={20} />,
      children: [
        {
          name: "Add Articles",
          path: "/admin/article",
          icon: <SquarePlus size={20} />,
        },
        {
          name: "Article List",
          path: "/admin/articlelist",
          icon: <Logs size={20} />,
        },
      ],
    },
    // Single items
    { name: "Contacts", path: "/admin/contacts", icon: <UserRoundSearch size={20} /> },
    {
      name: "Subscribers",
      path: "/admin/subscribers",
      icon: <UserCheck size={20} />,
    },
    {
      name: "Timeline",
      path: "/admin/timeline/list",
      icon: <Hourglass size={20} />,
    },
    { name: "Team", path: "/admin/team/list", icon: <UserRoundCog size={20} /> },
    {
      name: "Footer Contact",
      path: "/admin/footer-contact",
      icon: <Contact size={20} />,
    },
  ];

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center h-14 bg-gray-900 text-white px-4">
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
        <div className="flex items-center justify-between mb-3 ml-10">
          {!collapsed && (
            <img src="/subadmin/ericwhitelogo.gif" width={140} height={100} alt="logo" />
          )}
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
          {menuGroups.map((item, idx) => {
            // Group with children
            if (item.children) {
              const isExpanded = expandedGroups.includes(item.label);
              return (
                <div key={idx}>
                  <button
                    onClick={() => toggleGroup(item.label)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg w-full transition hover:bg-gray-800"
                  >
                    {item.icon}
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        <ChevronDown
                          className={`transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          size={16}
                        />
                      </>
                    )}
                  </button>
                  {!collapsed && isExpanded && (
                    <div className="ml-6 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                            pathname === child.path
                              ? "bg-[#a13045]"
                              : "hover:bg-gray-800"
                          }`}
                        >
                          {child.icon}
                          <span className="text-sm">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Single item – keeps active background
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                  pathname === item.path ? "bg-[#a13045]" : "hover:bg-gray-800"
                }`}
              >
                {item.icon}
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}