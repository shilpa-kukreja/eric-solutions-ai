"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

export default function TimelineList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/timeline/all`);
    setData(res.data.data);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this timeline?")) return;

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/timeline/${id}`);
      toast.success("Deleted");
      fetchData();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Timeline List</h2>

        <Link href="/admin/timeline/add">
          <button className="bg-black text-white px-4 py-2 rounded">
            + Add Timeline
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Icon</th>
              <th className="p-3">Year</th>
              <th className="p-3">Title</th>
              <th className="p-3">Order</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3 text-xl">{item.icon}</td>
                <td className="p-3">{item.year}</td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.order}</td>

                <td className="p-3 flex gap-3">
                  <Link href={`/admin/timeline/edit/${item._id}`}>
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

        {data.length === 0 && (
          <p className="p-4 text-center text-gray-500">No timeline found</p>
        )}
      </div>
    </div>
  );
}