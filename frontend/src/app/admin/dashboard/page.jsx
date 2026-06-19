"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import {
  Users,
  UserCheck,
  NotebookTabs,
  Search,
  ChevronLeft,
  ChevronRight,
  Activity,
  Eye,
  UserPlus,
  Clock,
  Percent,
  TrendingDown,
  BarChart3,
  MousePointerClick,
  Award,
  Zap,
  CheckCircle,
} from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

// Simple country → flag emoji mapping (no TypeScript annotations)
const countryFlags = {
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  Canada: "🇨🇦",
  Germany: "🇩🇪",
  France: "🇫🇷",
  Japan: "🇯🇵",
  Australia: "🇦🇺",
  India: "🇮🇳",
  Brazil: "🇧🇷",
  "South Korea": "🇰🇷",
  // fallback
};

const getFlag = (countryCode) => {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));
};
export default function AdminDashboard() {
  // All contacts (full list)
  const [allContacts, setAllContacts] = useState([]);
  // Filtered & sorted contacts (derived)
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Stats
  const [contactCount, setContactCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  // Analytics stats – updated to match backend response
  const [analytics, setAnalytics] = useState({
    activeUsers: 0,
    newUsers: 0,
    totalUsers: 0,
    sessions: 0,
    engagedSessions: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    pageViews: 0,
    eventCount: 0,
    conversions: 0,
  });

  const [countryData, setCountryData] = useState([]);

  // Table controls
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Entrance animation for the country table rows
  const [tableVisible, setTableVisible] = useState(false);

  useEffect(() => {
    fetchDashboardData();
    fetchCountryData();
    // Staggered entrance – rows appear after a tiny delay
    setTableVisible(true);
  }, []);

  const fetchCountryData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics/by-country`,
      );
      setCountryData(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };



  useEffect(() => {
  fetchDashboardData();

  // Refresh real‑time numbers every 30 seconds
  const interval = setInterval(async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics/realtime`);
      const rtData = res.data?.data || {};
      setRealtime({
        activeUsersLast5Minutes: rtData.activeUsersLast5Minutes || 0,
        activeUsersLast30Minutes: rtData.activeUsersLast30Minutes || 0,
      });
    } catch (err) {
      console.error("Realtime refresh error:", err);
    }
  }, 30000);

  return () => clearInterval(interval);
}, []);

  // Re-apply filtering & sorting whenever dependencies change
  useEffect(() => {
    if (!allContacts.length) {
      setFilteredContacts([]);
      return;
    }

    let result = allContacts;
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (c) =>
          c.name?.toLowerCase().includes(term) ||
          c.email?.toLowerCase().includes(term) ||
          c.phone?.toLowerCase().includes(term),
      );
    }

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
    setCurrentPage(1);
  }, [allContacts, searchTerm, sortConfig]);

  const fetchDashboardData = async () => {
    try {
      const [contactRes, blogRes, subscriberRes, analyticsRes, realtimeRes] =
        await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/get`),
          axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/list`),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/get`,
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics/dashboard`,
          ),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analytics/realtime`,
          ), // <-- new
        ]);

      const contactData = contactRes.data.contacts || [];
      const subscriberData = subscriberRes.data || [];
      const blogData = blogRes.data.blogs || [];
      const analyticsData = analyticsRes.data?.data || {};

      setAllContacts(contactData);
      setFilteredContacts(contactData);
      setContactCount(contactData.length);
      setSubscriberCount(subscriberData.newsletters?.length || 0);
      setBlogCount(blogData.length);
      setAnalytics({
        activeUsers: analyticsData.activeUsers || 0,
        newUsers: analyticsData.newUsers || 0,
        totalUsers: analyticsData.totalUsers || 0,
        sessions: analyticsData.sessions || 0,
        engagedSessions: analyticsData.engagedSessions || 0,
        averageSessionDuration: analyticsData.averageSessionDuration || 0,
        bounceRate: analyticsData.bounceRate || 0,
        pageViews: analyticsData.pageViews || 0,
        eventCount: analyticsData.eventCount || 0,
        conversions: analyticsData.conversions || 0,
      });

      // Set realtime state
      const rtData = realtimeRes.data?.data || {};
      setRealtime({
        activeUsersLast5Minutes: rtData.activeUsersLast5Minutes || 0,
        activeUsersLast30Minutes: rtData.activeUsersLast30Minutes || 0,
      });
    } catch (error) {
      console.error("Dashboard API Error:", error);
    }
  };

  // Pagination
  const totalItems = filteredContacts.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedContacts = filteredContacts.slice(
    startIndex,
    startIndex + pageSize,
  );

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

  // Existing menu cards (Contacts, Subscribers, Blogs)
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

  // Analytics metrics configuration (cards)
  const analyticsMetrics = [
    {
      label: "Active Users",
      key: "activeUsers",
      icon: <Users size={24} />,
      color: "from-blue-500 to-blue-600",
      formatter: (v) => v,
    },
    {
      label: "New Users",
      key: "newUsers",
      icon: <UserPlus size={24} />,
      color: "from-cyan-500 to-cyan-600",
      formatter: (v) => v,
    },
    {
      label: "Total Users",
      key: "totalUsers",
      icon: <Users size={24} />,
      color: "from-indigo-500 to-indigo-600",
      formatter: (v) => v,
    },
    {
      label: "Sessions",
      key: "sessions",
      icon: <Activity size={24} />,
      color: "from-violet-500 to-violet-600",
      formatter: (v) => v,
    },
    {
      label: "Engaged Sessions",
      key: "engagedSessions",
      icon: <CheckCircle size={24} />,
      color: "from-rose-500 to-rose-600",
      formatter: (v) => v,
    },
    {
      label: "Avg Session Duration",
      key: "averageSessionDuration",
      icon: <Clock size={24} />,
      color: "from-amber-500 to-amber-600",
      formatter: (v) => {
        if (!v) return "0:00";
        const mins = Math.floor(v / 60);
        const secs = Math.floor(v % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
      },
    },
    {
      label: "Bounce Rate",
      key: "bounceRate",
      icon: <TrendingDown size={24} />,
      color: "from-red-500 to-red-600",
      formatter: (v) => `${v.toFixed(1)}%`,
    },
    {
      label: "Page Views",
      key: "pageViews",
      icon: <Eye size={24} />,
      color: "from-teal-500 to-teal-600",
      formatter: (v) => v,
    },
    {
      label: "Events",
      key: "eventCount",
      icon: <MousePointerClick size={24} />,
      color: "from-pink-500 to-pink-600",
      formatter: (v) => v,
    },
    {
      label: "Conversions",
      key: "conversions",
      icon: <Award size={24} />,
      color: "from-emerald-500 to-emerald-600",
      formatter: (v) => v,
    },
  ];

  const [realtime, setRealtime] = useState({
    activeUsersLast5Minutes: 0,
    activeUsersLast30Minutes: 0,
  });

  // ----- Data for the new charts -----
  // Bounce rate radial gauge
  const bounceRateData = [
    { name: "Bounce Rate", value: analytics.bounceRate || 0 },
  ];

  // Session engagement donut
  const engagedSessions = analytics.engagedSessions || 0;
  const notEngagedSessions = Math.max(
    0,
    (analytics.sessions || 0) - engagedSessions,
  );
  const sessionEngagementData = [
    { name: "Engaged", value: engagedSessions },
    { name: "Not Engaged", value: notEngagedSessions },
  ];
  const DONUT_COLORS = ["#10b981", "#e5e7eb"]; // green & gray-200

  // ----- Compute max values for country table bars -----
  const maxActive = useMemo(
    () => Math.max(...countryData.map((c) => c.activeUsers || 0), 0),
    [countryData],
  );
  const maxNew = useMemo(
    () => Math.max(...countryData.map((c) => c.newUsers || 0), 0),
    [countryData],
  );
  const maxTotal = useMemo(
    () => Math.max(...countryData.map((c) => c.totalUsers || 0), 0),
    [countryData],
  );
  const maxSessions = useMemo(
    () => Math.max(...countryData.map((c) => c.sessions || 0), 0),
    [countryData],
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-1">
        Welcome to Admin Dashboard
      </h2>
      <p className="text-gray-500 mb-8">
        Manage your website from the admin panel
      </p>

      {/* Dashboard Cards – Contacts, Subscribers, Blogs */}
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

      {/* ===== LIVE ACTIVE USERS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Active Users (last 5 min)
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {realtime.activeUsersLast5Minutes}
            </p>
          </div>
          <Zap className="text-yellow-500" size={32} />
        </div>

        <div className="bg-white border rounded-xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Active Users (last 30 min)
            </p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {realtime.activeUsersLast30Minutes}
            </p>
          </div>
          <Activity className="text-blue-500" size={32} />
        </div>
      </div>

      {/* ===== PREMIUM ANALYTICS SECTION ===== */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">
            📊 Analytics Overview (Last 30 Days)
          </h3>
          <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
            Updated just now
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {analyticsMetrics.map((metric, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${metric.color}  text-white p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs opacity-80 font-medium uppercase tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-bold mt-1">
                    {metric.formatter(analytics[metric.key] || 0)}
                  </p>
                </div>
                <div className="bg-white/20 p-2 rounded-lg">{metric.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== IMPROVED COUNTRY TABLE ===== */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              🌍 Users by Country
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Top locations driving traffic
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-500">Live</span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Rank
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Country
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Active Users
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                  New
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Total
                </th>
                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Sessions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {countryData.map((c, i) => (
                <tr
                  key={i}
                  className="group hover:bg-blue-50/40 transition-all duration-300"
                >
                  {/* Rank */}
                  <td className="px-6 py-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
                      {i + 1}
                    </div>
                  </td>

                  {/* Country */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {/* <img
                        src={`https://flagcdn.com/w40/${c.country.toLowerCase()}.png`}
                        alt={c.country}
                        className="w-6 h-4 rounded-sm object-cover border"
                      /> */}

                      <span className="font-medium text-gray-900">
                        {c.country}
                      </span>
                    </div>
                  </td>

                  {/* Active Users */}
                  <td className="px-6 py-4 min-w-[250px]">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-blue-600 w-16">
                        {c.activeUsers.toLocaleString()}
                      </span>

                      <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000"
                          style={{
                            width: `${(c.activeUsers / maxActive) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* New Users */}
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      {c.newUsers.toLocaleString()}
                    </span>
                  </td>

                  {/* Total Users */}
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                      {c.totalUsers.toLocaleString()}
                    </span>
                  </td>

                  {/* Sessions */}
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                      {c.sessions.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== ANALYTICS CHARTS (Google Analytics style) ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Bounce Rate Radial Gauge */}
        <div className="bg-white border rounded-xl shadow-sm p-5 flex flex-col">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            Bounce Rate
          </h4>
          <div className="relative flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="100%"
                barSize={15}
                data={bounceRateData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  background={{ fill: "#e5e7eb" }}
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            {/* Center text for the percentage */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-gray-800">
                {(analytics.bounceRate || 0).toFixed(1)}%
              </span>
              <span className="text-xs text-gray-500">Bounce Rate</span>
            </div>
          </div>
        </div>

        {/* Session Engagement Donut */}
        <div className="bg-white border rounded-xl shadow-sm p-5 flex flex-col">
          <h4 className="text-md font-semibold text-gray-700 mb-2">
            Session Engagement
          </h4>
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sessionEngagementData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {sessionEngagementData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [value.toLocaleString(), name]}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Engaged: {engagedSessions.toLocaleString()} / Total:{" "}
            {analytics.sessions?.toLocaleString() || 0}
          </p>
        </div>
      </div>

      {/* Latest Contacts Table – unchanged */}
      <div className="bg-white border rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Latest Contacts</h3>
          <div className="flex flex-wrap items-center gap-3">
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
                    <td className="p-4 font-medium text-gray-700">
                      {contact.name}
                    </td>
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
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
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
