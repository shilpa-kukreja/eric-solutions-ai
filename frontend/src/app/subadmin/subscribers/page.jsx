"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Search,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  RefreshCw,
  Mail,
  Download,
  ArrowUpDown,
} from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/get`,
      );
      const data = await res.json();
      setSubscribers(data.newsletters || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredSubscribers = useMemo(() => {
    let filtered = subscribers.filter((sub) =>
      sub.email?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    filtered.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return filtered;
  }, [subscribers, searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredSubscribers.length / itemsPerPage);
  const paginatedSubscribers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredSubscribers.slice(start, start + itemsPerPage);
  }, [filteredSubscribers, currentPage, itemsPerPage]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/delete/${id}`,
        { method: "DELETE" },
      );
      if (res.ok) {
        setSubscribers((prev) => prev.filter((s) => s._id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date) =>
    new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-");

  // ------------------ EXPORTS ------------------
  const exportToExcel = () => {
    const exportData = filteredSubscribers.map((sub) => ({
      Email: sub.email,
      Date: formatDate(sub.createdAt),
    }));
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Subscribers");
    XLSX.writeFile(workbook, "newsletter_subscribers.xlsx");
  };

  const exportToCSV = () => {
    const exportData = filteredSubscribers.map((sub) => ({
      Email: sub.email,
      Date: formatDate(sub.createdAt),
    }));
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "newsletter_subscribers.csv";
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Newsletter Subscribers", 14, 15);
    autoTable(doc, {
      startY: 25,
      head: [["Email", "Date"]],
      body: filteredSubscribers.map((sub) => [
        sub.email,
        formatDate(sub.createdAt),
      ]),
    });
    doc.save("newsletter_subscribers.pdf");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Newsletter Subscribers
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Total: {subscribers.length}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm"
          >
            <FileSpreadsheet size={16} />
            Excel
          </button>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg text-sm"
          >
            <Download size={16} />
            CSV
          </button>
          <button
            onClick={exportToPDF}
            className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm"
          >
            <Download size={16} />
            PDF
          </button>
          <button
            onClick={fetchSubscribers}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
      </div>

      {/* SEARCH + SORT + ITEMS PER PAGE */}
      <div className="bg-white border rounded-lg p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border rounded-lg w-full text-sm md:text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={`${sortConfig.key}-${sortConfig.direction}`}
              onChange={(e) => {
                const [key, direction] = e.target.value.split("-");
                setSortConfig({ key, direction });
              }}
              className="border rounded-lg px-3 py-2 text-md md:text-base"
            >
              <option value="email-asc">Email A → Z</option>
              <option value="email-desc">Email Z → A</option>
              <option value="createdAt-desc">Date (newest first)</option>
              <option value="createdAt-asc">Date (oldest first)</option>
            </select>

            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded-lg px-3 py-2 text-sm md:text-base"
            >
              {[5, 10, 25].map((n) => (
                <option key={n} value={n}>
                  Show {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th
                className="p-4 text-left text-md cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center gap-1">
                  Email
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th
                className="p-4 text-left text-md cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort("createdAt")}
              >
                <div className="flex items-center gap-1">
                  Date
                  <ArrowUpDown size={14} />
                </div>
              </th>
              {/* <th className="p-4 text-left text-md">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {paginatedSubscribers.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-500">
                  No subscribers found
                </td>
              </tr>
            )}
            {paginatedSubscribers.map((sub) => (
              <tr key={sub._id} className="border-b hover:bg-gray-50">
                <td className="p-4 flex items-center gap-2 text-md">
                  <Mail size={18} />
                  {sub.email}
                </td>
                <td className="p-4 text-md">
                  {new Date(sub.createdAt)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, "-")}
                </td>{" "}
                {/* <td className="p-4">
                  <button
                    onClick={() => setDeleteConfirm(sub._id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 size={18} />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      {/* <div className="grid md:hidden gap-4">
        {paginatedSubscribers.length === 0 && (
          <div className="text-center text-gray-500 py-6">
            No subscribers found
          </div>
        )}
        {paginatedSubscribers.map((sub) => (
          <div
            key={sub._id}
            className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between"
          >
            <div>
              <div className="flex items-center gap-2 font-medium text-sm">
                <Mail size={16} />
                {sub.email}
              </div>
              <p className="text-gray-500 text-xs mt-1">
                {formatDate(sub.createdAt)}
              </p>
            </div>
            <button
              onClick={() => setDeleteConfirm(sub._id)}
              className="text-red-600 bg-red-50 p-2 rounded-lg"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div> */}

      {/* PAGINATION - no forced text size, matches original */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded border"
          >
            <ChevronLeft size={16} />
          </button>
          <span>
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded border"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <p className="mb-4 text-sm md:text-base">
              Are you sure you want to delete this subscriber?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              {/* <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
