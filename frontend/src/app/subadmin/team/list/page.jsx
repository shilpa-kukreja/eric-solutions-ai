"use client";

import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  RefreshCw,
  Download,
  ArrowUpDown,
  Trash2,
} from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function TeamList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/list`
      );
      setData(res.data.data || []);
      console.log(res.data.data);
    } catch (error) {
      toast.error("Failed to load team members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/delete/${id}`
      );
      toast.success("Deleted successfully");
      setData((prev) => prev.filter((item) => item._id !== id));
      setDeleteConfirm(null);
    } catch {
      toast.error("Error deleting");
    }
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const filteredData = useMemo(() => {
    let filtered = data.filter((item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.quote?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aVal = a[sortConfig.key] || "";
      const bVal = b[sortConfig.key] || "";
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [data, searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // ---------- EXPORT FUNCTIONS (now with Description) ----------
  const exportToExcel = () => {
    const exportData = filteredData.map((item) => ({
      Name: item.name,
      Designation: item.designation,
      Description: item.quote || "",
    }));
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Team");
    XLSX.writeFile(workbook, "team_members.xlsx");
  };

  const exportToCSV = () => {
    const exportData = filteredData.map((item) => ({
      Name: item.name,
      Designation: item.designation,
      Description: item.quote || "",
    }));
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "team_members.csv";
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Team Members", 14, 15);
    autoTable(doc, {
      startY: 25,
      head: [["Name", "Designation", "Description"]],
      body: filteredData.map((item) => [
        item.name,
        item.designation,
        item.quote || "",
      ]),
    });
    doc.save("team_members.pdf");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="animate-spin w-8 h-8 text-blue-600" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Team Members</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Total: {data.length}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/subadmin/team/add">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm">
              + Add Member
            </button>
          </Link>

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
            onClick={fetchData}
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
              placeholder="Search by name, designation, or description..."
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
              className="border rounded-lg px-3 py-2 text-sm md:text-base"
            >
              <option value="name-asc">Name A → Z</option>
              <option value="name-desc">Name Z → A</option>
              <option value="designation-asc">Designation A → Z</option>
              <option value="designation-desc">Designation Z → A</option>
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

      {/* TABLE */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th
                className="p-4 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  Name
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th
                className="p-4 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort("designation")}
              >
                <div className="flex items-center gap-1">
                  Designation
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  No team members found
                </td>
              </tr>
            )}
            {paginatedData.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image?.url}`}
                    className="w-8 h-8 rounded-full object-cover"
                    alt={item.name}
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.designation}</td>
                <td className="p-4 flex gap-3">
                  <Link href={`/subadmin/team/edit/${item._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      Edit
                    </button>
                  </Link>
                  {/* <button
                    onClick={() => setDeleteConfirm(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Trash2 size={14} />
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
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
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages, p + 1))
            }
            className="p-2 rounded border"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
            <p className="mb-4 text-sm md:text-base">
              Are you sure you want to delete this team member?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}