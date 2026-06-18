"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

export default function SubAdminListPage() {
    const [subadmins, setSubadmins] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState(""); // ✅ NEW

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;

    const router = useRouter();

    // DELETE FUNCTION
    const handleDelete = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete?");
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("adminToken");

            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/delete/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.success) {
                alert("Deleted successfully");
                setSubadmins((prev) => prev.filter((item) => item._id !== id));
            }
        } catch (err) {
            alert(err.response?.data?.message || "Delete failed");
        }
    };

    // FETCH DATA
    const fetchSubAdmins = async () => {
        try {
            const token = localStorage.getItem("adminToken");

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/subadmin/all`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.success) {
                setSubadmins(res.data.subadmins);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubAdmins();
    }, []);

    // ✅ FILTER LOGIC (SEARCH BY NAME)
    const filteredData = subadmins.filter((user) =>
        user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    // PAGINATION ON FILTERED DATA
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentData = filteredData.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredData.length / perPage);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    // ✅ RESET PAGE WHEN SEARCH CHANGES
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    if (loading) return <div className="p-6 text-slate-600">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-100 p-4 md:p-6 rounded-2xl">

            {/* HEADER */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                <div className="flex justify-between items-center flex-wrap gap-3">
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900">
                            Sub Admins
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            View and manage subadmin access.
                        </p>
                    </div>

                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                        Total: {filteredData.length}
                    </span>
                </div>
            </div>

            {/* 🔍 SEARCH INPUT */}
            <div className="mb-4 relative w-full md:w-1/3">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
            </div>

            {/* TABLE CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">

                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr className="text-slate-600 text-xs uppercase">
                                <th className="p-4 text-left">#</th>
                                <th className="p-4 text-left">Profile</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Phone</th>
                                <th className="p-4 text-left">Gender</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Created</th>
                                <th className="p-4 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentData.map((user, index) => (
                                <tr
                                    key={user._id}
                                    className="border-b border-slate-100 hover:bg-slate-50 transition"
                                >
                                    <td className="p-4">
                                        {indexOfFirst + index + 1}
                                    </td>

                                    <td className="p-4">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${user.profileImg}`}
                                            className="w-10 h-10 rounded-full object-cover "
                                        />
                                    </td>

                                    <td className="p-4 font-medium text-slate-800">
                                        {user.fullName}
                                    </td>

                                    <td className="p-4 text-slate-600">
                                        {user.email}
                                    </td>

                                    <td className="p-4 text-slate-600">
                                        {user.number}
                                    </td>

                                    <td className="p-4 capitalize">
                                        {user.gender}
                                    </td>

                                    <td className="p-4">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full font-medium ${user.status === "active"
                                                ? "bg-emerald-100 text-emerald-700"
                                                : "bg-rose-100 text-rose-600"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>

                                    <td className="p-4 text-slate-500 text-xs">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>

                                    <td className="p-4 flex gap-2">
                                        <button
                                            onClick={() => router.push(`/admin/subadmin/edit/${user._id}`)}
                                            className="px-3 py-1 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="px-3 py-1 text-xs bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>

            {/* PAGINATION */}
            <div className="mt-8 flex justify-end items-right">
        <div className="flex items-center bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          {/* Previous Arrow */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-3 py-2 text-slate-600 hover:bg-slate-100 transition ${
              currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ArrowLeft  size={18}/>
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-md"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Arrow */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-3 py-2 text-slate-600 hover:bg-slate-100 transition ${
              currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ArrowRight  size={18}/>
          </button>
        </div>
      </div>
        </div>
    );
}