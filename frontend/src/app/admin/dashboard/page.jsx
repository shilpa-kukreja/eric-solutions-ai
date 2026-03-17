"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { Users, UserCheck, NotebookTabs } from "lucide-react";

export default function AdminDashboard() {

  const [contacts, setContacts] = useState([]);
  const [contactCount, setContactCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      const [contactRes, blogRes] = await Promise.all([
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`),
        
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`)
      ]);

       const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/get`
      );


      
      const contactData = contactRes.data.contacts || [];
      const subscriberData = response.data || [];
      console.log("this is ",subscriberData);
      const blogData = blogRes.data.blogs || [];
      console.log("blogdata",blogData);

    

      setContacts(contactData.slice(0, 10));
      setContactCount(contactData.length);
      setSubscriberCount(subscriberData.newsletters.length);
      console.log(subscriberData.length);
      setBlogCount(blogData.length);

    } catch (error) {
      console.error("Dashboard API Error:", error);
    }
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

      <h2 className="text-2xl font-semibold mb-1">
        Welcome to Admin Dashboard
      </h2>

      <p className="text-gray-500 mb-8">
        Manage your website from the admin panel
      </p>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">

        {menu.map((item, index) => (

          <Link key={index} href={item.path}>

            <div className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300`}>

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm opacity-90">
                    Total {item.name}
                  </p>

                  <h3 className="text-3xl font-bold mt-1">
                    {item.count}
                  </h3>

                </div>

                <div className="bg-white/20 p-3 rounded-lg">
                  {item.icon}
                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* Latest Contacts Table */}

      <div className="bg-white border rounded-xl shadow-sm">

        <div className="flex justify-between items-center px-6 py-4 border-b">

          <h3 className="text-lg font-semibold">
            Latest Contacts
          </h3>

          <Link
            href="/admin/contacts"
            className="text-sm text-blue-600 hover:underline"
          >
            View All
          </Link>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">

              <tr>

                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">Email</th>
                <th className="p-4 text-left font-medium">Message</th>
                <th className="p-4 text-left font-medium">Date</th>

              </tr>

            </thead>

            <tbody>

              {contacts.length > 0 ? (

                contacts.map((contact, index) => (

                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="p-4 font-medium text-gray-700">
                      {contact.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {contact.email}
                    </td>

                    <td className="p-4 text-gray-500 max-w-xs truncate">
                      {contact.message}
                    </td>

                    <td className="p-4 text-gray-400">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="p-6 text-center text-gray-400"
                  >
                    No contacts found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}