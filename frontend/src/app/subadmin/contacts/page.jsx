"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  Calendar,
  FileSpreadsheet,
  Eye,
  Trash2,
  RefreshCw,
} from "lucide-react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [nameSort, setNameSort] = useState("default");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`,
      );
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error(error);
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

  const filteredContacts = useMemo(() => {
    let filtered = contacts.filter((contact) => {
      return (
        contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.includes(searchTerm) ||
        contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    if (nameSort === "asc") {
      filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    } else if (nameSort === "desc") {
      filtered.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    } else {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [contacts, searchTerm, sortConfig, nameSort]);

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const paginatedContacts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredContacts.slice(start, start + itemsPerPage);
  }, [filteredContacts, currentPage, itemsPerPage]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/delete/${id}`,
        { method: "DELETE" },
      );

      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error(error);
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

  const exportToExcel = () => {
    const exportData = filteredContacts.map((contact) => ({
      Name: contact.name,
      Email: contact.email,
      Phone: contact.phone || "",
      Message: contact.message || "",

      Date: formatDate(contact.createdAt),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    XLSX.writeFile(workbook, "contacts.xlsx");
  };

  const exportToCSV = () => {
    const exportData = filteredContacts.map((contact) => ({
      Name: contact.name,
      Email: contact.email,
      Phone: contact.phone || "",
      Message: contact.message || "",

      Date: formatDate(contact.createdAt),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contacts.csv";
    link.click();
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Contact Requests", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [["Name", "Email", "Phone", "Message", "Date"]],
      body: filteredContacts.map((contact) => [
        contact.name,
        contact.email,
        contact.phone || "",
        contact.message || "",

        formatDate(contact.createdAt),
      ]),
    });

    doc.save("contacts.pdf");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Contact Requests</h1>
          <p className="text-gray-600">Total: {contacts.length}</p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            <FileSpreadsheet size={16} />
            Excel
          </button>

          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg"
          >
            <Download size={16} />
            CSV
          </button>

          <button
            onClick={exportToPDF}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            <Download size={16} />
            PDF
          </button>

          <button
            onClick={fetchContacts}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>
      </div>

      {/* FILTERS */}

      <div className="bg-white border rounded-xl p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border rounded-lg w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={nameSort}
              onChange={(e) => setNameSort(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="default">Sort By</option>
              <option value="asc">Name A-Z</option>
              <option value="desc">Name Z-A</option>
            </select>

            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded-lg px-3 py-2"
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

      {/* MOBILE CARDS */}

      <div className="lg:hidden space-y-4">
        {paginatedContacts.map((contact) => (
          <div
            key={contact._id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">{contact.name}</h3>

              {/* <button
                onClick={() => setDeleteConfirm(contact._id)}
                className="text-red-600"
              >
                <Trash2 size={18} />
              </button> */}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <Mail size={14} />
              {contact.email}
            </div>

            {contact.phone && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={14} />
                {contact.phone}
              </div>
            )}

            <p className="text-sm text-gray-700 mt-2 line-clamp-2">
              {contact.message}
            </p>

            <div className="text-xs text-gray-500 mt-2">
              {new Date(contact.createdAt).toLocaleDateString("en-GB")}
            </div>

            <button
              onClick={() => {
                setSelectedMessage(contact.message);
                setShowMessageModal(true);
              }}
              className="text-blue-600 text-sm mt-2"
            >
              View Full Message
            </button>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}

      <div className="hidden lg:block bg-white border rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Contact</th>
              <th className="p-4 text-left">Phone</th>
              <th
                className="p-4 text-left cursor-pointer"
                onClick={() => handleSort("createdAt")}
              >
                Date
              </th>
              {/* <th className="p-4 text-left">Actions</th> */}
            </tr>
          </thead>

          <tbody>
            {paginatedContacts.map((contact) => (
              <tr key={contact._id} className="border-b">
                <td className="p-4">{contact.name}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    {contact.email}
                  </div>

                  {/* {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      {contact.phone}
                    </div>
                  )} */}
                </td>

                {/* <td className="p-4 max-w-xs truncate">{contact.message}</td> */}
                                <td className="p-4">{contact.phone}</td>


               <td className="p-4">
  {new Date(contact.createdAt)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-")}
</td> 

                {/* <td className="p-4 flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedMessage(contact.message);
                      setShowMessageModal(true);
                    }}
                    className="text-blue-600"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    onClick={() => setDeleteConfirm(contact._id)}
                    className="text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
            <ChevronLeft />
          </button>

          <span>
            Page {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* MESSAGE MODAL */}

      {showMessageModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4">
            <div className="p-6 border-b font-semibold">Full Message</div>

            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {selectedMessage}
            </div>

            <div className="p-6 border-t flex justify-end">
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}

      {deleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-4 p-6">
            <h3 className="font-semibold mb-3">Delete Contact</h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this contact?
            </p>

            <div className="flex justify-end gap-3">
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
