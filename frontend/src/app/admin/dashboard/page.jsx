"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  NotebookTabs,
  Search,
  ChevronLeft,
  ChevronRight,
  Activity,
  Eye,
} from "lucide-react";

export default function AdminDashboard() {
  // All contacts (full list)
  const [allContacts, setAllContacts] = useState([]);
  // Filtered & sorted contacts (derived)
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Stats
  const [contactCount, setContactCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  // Analytics stats
  const [analytics, setAnalytics] = useState({
    activeUsers: 0,
    sessions: 0,
    pageViews: 0,
  });

  // Table controls
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "desc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Re-apply filtering & sorting whenever dependencies change
  useEffect(() => {
    if (!allContacts.length) {
      setFilteredContacts([]);
      return;
    }

    // 1. Filter
    let result = allContacts;
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.name?.toLowerCase().includes(term) ||
          c.email?.toLowerCase().includes(term) ||
          c.phone?.toLowerCase().includes(term)
      );
    }

    // 2. Sort
    if (sortConfig.key) {
      result = [...result].sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];
        if (sortConfig.key === "createdAt") {
          aVal = new Date(aVal).getTime();
          bVal = new Date(bVal).getTime();
        } else if (typeof aVal === "string") {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredContacts(result);
    setCurrentPage(1); // reset to first page when filter/sort changes
  }, [allContacts, searchTerm, sortConfig]);

  const fetchDashboardData = async () => {
    try {
      const [contactRes, blogRes, subscriberRes, analyticsRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/get`),
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics/dashboard`),
      ]);

      const contactData = contactRes.data.contacts || [];
      const subscriberData = subscriberRes.data || [];
      const blogData = blogRes.data.blogs || [];
      const analyticsData = analyticsRes.data;

      setAllContacts(contactData);
      setFilteredContacts(contactData);
      setContactCount(contactData.length);
      setSubscriberCount(subscriberData.newsletters?.length || 0);
      setBlogCount(blogData.length);
      setAnalytics({
        activeUsers: analyticsData.activeUsers || 0,
        sessions: analyticsData.sessions || 0,
        pageViews: analyticsData.pageViews || 0,
      });
    } catch (error) {
      console.error("Dashboard API Error:", error);
    }
  };

  // Pagination
  const totalItems = filteredContacts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedContacts = filteredContacts.slice(startIndex, startIndex + pageSize);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  const menu = [
    {
      name: "Contacts",
      path: "/admin/contacts",
      icon: <Users size={28} />,
      count: contactCount,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Subscribers",
      path: "/admin/subscribers",
      icon: <UserCheck size={28} />,
      count: subscriberCount,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Blogs",
      path: "/admin/blog",
      icon: <NotebookTabs size={28} />,
      count: blogCount,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-1">Welcome to Admin Dashboard</h2>
      <p className="text-gray-500 mb-8">Manage your website from the admin panel</p>

      {/* Dashboard Cards – unchanged */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
        {menu.map((item, index) => (
          <Link key={index} href={item.path}>
            <div
              className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-90">Total {item.name}</p>
                  <h3 className="text-3xl font-bold mt-1">{item.count}</h3>
                </div>
                <div className="bg-white/20 p-3 rounded-lg">{item.icon}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ===== NEW: Analytics Cards ===== */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">Active Users</p>
                <h3 className="text-3xl font-bold mt-1">{analytics.activeUsers}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Users size={28} />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">Sessions</p>
                <h3 className="text-3xl font-bold mt-1">{analytics.sessions}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Activity size={28} />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">Page Views</p>
                <h3 className="text-3xl font-bold mt-1">{analytics.pageViews}</h3>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Eye size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Contacts Table – enhanced with search, sort, pagination */}
      <div className="bg-white border rounded-xl shadow-sm">
        {/* Header with search and view all */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Latest Contacts</h3>
          <div className="flex flex-wrap items-center gap-3">
            {/* Search input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-60"
              />
            </div>
            <Link
              href="/admin/contacts"
              className="text-sm text-blue-600 hover:underline font-medium whitespace-nowrap"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th
                  className="p-4 text-left font-medium cursor-pointer hover:text-gray-900 select-none"
                  onClick={() => handleSort("name")}
                >
                  Name <span className="ml-1">{getSortIcon("name")}</span>
                </th>
                <th
                  className="p-4 text-left font-medium cursor-pointer hover:text-gray-900 select-none"
                  onClick={() => handleSort("email")}
                >
                  Email <span className="ml-1">{getSortIcon("email")}</span>
                </th>
                <th
                  className="p-4 text-left font-medium cursor-pointer hover:text-gray-900 select-none"
                  onClick={() => handleSort("phone")}
                >
                  Phone <span className="ml-1">{getSortIcon("phone")}</span>
                </th>
                <th
                  className="p-4 text-left font-medium cursor-pointer hover:text-gray-900 select-none"
                  onClick={() => handleSort("createdAt")}
                >
                  Date <span className="ml-1">{getSortIcon("createdAt")}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedContacts.length > 0 ? (
                paginatedContacts.map((contact, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-medium text-gray-700">{contact.name}</td>
                    <td className="p-4 text-gray-600">{contact.email}</td>
                    <td className="p-4 text-gray-600">{contact.phone}</td>
                    <td className="p-4 text-gray-500 whitespace-nowrap">
                      {new Date(contact.createdAt)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/ /g, "-")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-400">
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        {totalItems > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-t border-gray-200 bg-gray-50/50">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>
                Showing {startIndex + 1}–
                {Math.min(startIndex + pageSize, totalItems)} of {totalItems}
              </span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-200 rounded-lg text-sm px-2 py-1 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm text-gray-700 px-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}