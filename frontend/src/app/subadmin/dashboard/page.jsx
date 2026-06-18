"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Users, NotebookTabs, IndianRupee, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function AdminDashboard() {
  const [allContacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Stats
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [subadminCount, setSubadminCount] = useState(0);

  // Table controls
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "desc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Re‑apply filtering & sorting whenever dependencies change
  useEffect(() => {
    if (!allContacts.length) return;

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
      const token = localStorage.getItem("subadminToken");

      const [
        contactRes,
        subscriberRes,
        blogRes,
        userRes,
        subadminRes,
        orderRes,
      ] = await Promise.all([
        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`)
          .catch(() => null),

        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subscriber/get`)
          .catch(() => null),

        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch(() => null),

        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/all`)
          .catch(() => null),

        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/all`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .catch(() => null),

        axios
          .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order/all`)
          .catch(() => null),
      ]);

      const contactData = contactRes?.data?.contacts || [];
      const subscriberData = subscriberRes?.data?.subscribers || [];
      const blogData = blogRes?.data?.blogs || [];
      const userData = userRes?.data?.users || [];
      const subadminData = subadminRes?.data?.subadmins || [];
      const orderData = orderRes?.data?.orders || [];

      const revenue = orderData.reduce((sum, order) => {
        if (order?.paymentStatus !== "Paid") return sum;
        return sum + Number(order?.amount ?? 0);
      }, 0);

      setAllContacts(contactData); // store full list
      setFilteredContacts(contactData); // initial
      setContactCount(contactData.length);
      setSubscriberCount(subscriberData.length);
      setBlogCount(blogData.length);
      setUserCount(userData.length);
      setSubadminCount(subadminData.length);
      setOrderCount(orderData.length);
      setTotalRevenue(revenue);
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

  // Menu items (unchanged)
  const menu = [
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users size={22} />,
      count: userCount,
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-500",
      text: "text-blue-700",
      iconBg: "bg-blue-500",
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <NotebookTabs size={22} />,
      count: orderCount,
      bg: "from-purple-50 to-purple-100",
      border: "border-purple-500",
      text: "text-purple-700",
      iconBg: "bg-purple-500",
    },
    {
      name: "Revenue",
      path: "/admin/orders",
      icon: <IndianRupee size={22} />,
      count: `₹${totalRevenue.toLocaleString("en-IN")}`,
      bg: "from-yellow-50 to-yellow-100",
      border: "border-yellow-500",
      text: "text-yellow-700",
      iconBg: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-full p-4 md:p-6 rounded-2xl">
      {/* Welcome Banner – unchanged */}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 md:p-8 shadow-[0_20px_45px_rgba(2,6,23,0.25)] mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-white">
          Welcome to Sub Admin Dashboard
        </h2>
        <p className="text-slate-300">
          Manage your website operations from the subadmin panel.
        </p>
      </div>

      {/* Latest Contacts – enhanced with filter, sort, pagination */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Header with actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            Latest Contacts
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-60"
              />
            </div>
            <Link
              href="/subadmin/contacts"
              className="text-sm text-blue-600 hover:underline font-medium whitespace-nowrap"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th
                  className="p-4 text-left cursor-pointer hover:text-slate-900 select-none"
                  onClick={() => handleSort("name")}
                >
                  Name <span className="ml-1">{getSortIcon("name")}</span>
                </th>
                <th
                  className="p-4 text-left cursor-pointer hover:text-slate-900 select-none"
                  onClick={() => handleSort("email")}
                >
                  Email <span className="ml-1">{getSortIcon("email")}</span>
                </th>
                <th
                  className="p-4 text-left cursor-pointer hover:text-slate-900 select-none"
                  onClick={() => handleSort("phone")}
                >
                  Phone <span className="ml-1">{getSortIcon("phone")}</span>
                </th>
                <th
                  className="p-4 text-left cursor-pointer hover:text-slate-900 select-none"
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
                    className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 font-medium text-slate-700">{contact.name}</td>
                    <td className="p-4 text-slate-600">{contact.email}</td>
                    <td className="p-4 text-slate-600">{contact.phone}</td>
                    <td className="p-4 text-slate-500 whitespace-nowrap">
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
                  <td colSpan="4" className="p-6 text-center text-slate-400">
                    No contacts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        {totalItems > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 bg-slate-50/50">
            <div className="flex items-center gap-3 text-sm text-slate-600">
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
                className="border border-slate-200 rounded-lg text-sm px-2 py-1 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-sm text-slate-700 px-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-colors"
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