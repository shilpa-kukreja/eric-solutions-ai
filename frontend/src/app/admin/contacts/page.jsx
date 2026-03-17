"use client";

import { useEffect, useState, useMemo } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  Calendar,
  FileSpreadsheet,
  Eye,
  Trash2,
  RefreshCw
} from "lucide-react";

export default function AdminContactsPage() {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc"
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`);
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const filteredContacts = useMemo(() => {
    let filtered = contacts.filter(contact => {
      const matchesSearch =
        contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.includes(searchTerm) ||
        contact.message?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesInterest =
        filterInterest === "all" || contact.interest === filterInterest;

      return matchesSearch && matchesInterest;
    });

    filtered.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [contacts, searchTerm, filterInterest, sortConfig]);

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const paginatedContacts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredContacts.slice(start, start + itemsPerPage);
  }, [filteredContacts, currentPage, itemsPerPage]);

  const interests = ["all", ...new Set(contacts.map(c => c.interest).filter(Boolean))];

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/delete/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setContacts(prev => prev.filter(c => c._id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

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
          <p className="text-gray-600">
            Total: {contacts.length}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">

          <button
            onClick={fetchContacts}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg w-full sm:w-auto"
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

            <div className="flex items-center gap-2">
              <Filter size={16} />
              <select
                value={filterInterest}
                onChange={(e) => setFilterInterest(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                {interests.map(i => (
                  <option key={i} value={i}>
                    {i === "all" ? "All Interests" : i}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded-lg px-3 py-2"
            >
              {[5, 10, 25].map(n => (
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

        {paginatedContacts.map(contact => (

          <div
            key={contact._id}
            className="border rounded-xl p-4 bg-white shadow-sm"
          >

            <div className="flex justify-between items-start">

              <h3 className="font-semibold">{contact.name}</h3>

              <button
                onClick={() => setDeleteConfirm(contact._id)}
                className="text-red-600"
              >
                <Trash2 size={18} />
              </button>

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
              {formatDate(contact.createdAt)}
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
              <th className="p-4 text-left">Message</th>
              <th
                className="p-4 text-left cursor-pointer"
                onClick={() => handleSort("createdAt")}
              >
                Date
              </th>
              <th className="p-4 text-left">Actions</th>

            </tr>

          </thead>

          <tbody>

            {paginatedContacts.map(contact => (

              <tr key={contact._id} className="border-b">

                <td className="p-4">{contact.name}</td>

                <td className="p-4">

                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    {contact.email}
                  </div>

                  {contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      {contact.phone}
                    </div>
                  )}

                </td>

                <td className="p-4 max-w-xs truncate">
                  {contact.message}
                </td>

                <td className="p-4">
                  {formatDate(contact.createdAt)}
                </td>

                <td className="p-4 flex gap-2">

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

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      {totalPages > 1 && (

        <div className="flex items-center justify-center gap-4">

          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          >
            <ChevronLeft />
          </button>

          <span>
            Page {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          >
            <ChevronRight />
          </button>

        </div>

      )}

      {/* MESSAGE MODAL */}

      {showMessageModal && (

        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">

          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full mx-4">

            <div className="p-6 border-b font-semibold">
              Full Message
            </div>

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

            <h3 className="font-semibold mb-3">
              Delete Contact
            </h3>

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