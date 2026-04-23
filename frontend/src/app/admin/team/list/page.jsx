"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function TeamList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/list`);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this member?")) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/delete/${id}`);
      toast.success("Deleted");
      fetchData();
    } catch {
      toast.error("Error deleting");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">Team Members</h2>
        <Link href="/admin/team/add">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            + Add Member
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <table className="w-full ">
          <thead className="bg-gray-100 text-left text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-4">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item.image?.url}`}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </td>

                <td >{item.name}</td>
                <td>{item.designation}</td>

                <td className="p-3 flex gap-3">
                  <Link href={`/admin/team/edit/${item._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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
  );
}