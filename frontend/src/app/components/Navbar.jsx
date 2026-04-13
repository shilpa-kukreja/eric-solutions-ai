"use client"

import { useState } from "react"
import Link from "next/link"

const companyLinks = [
  { name: "About", slug: "about" },
  { name: "Team", slug: "team" },
]

const insightsLinks = [
  { name: "Blog", slug: "blogpage" },
  { name: "Case Studies", slug: "case-studies" },
]

const agentsLinks = [
  { name: "Eric AI DB Designer", slug: "db-designer" },
  { name: "Eric AI Data Entry", slug: "data-entry" },
  { name: "Eric AI CRA", slug: "cra" },
  { name: "Eric AI Statistics", slug: "statistics" },
  { name: "Eric AI Medical Writer", slug: "medical-writer" },
  { name: "Eric AI Document Manager", slug: "document-manager" },
  { name: "Eric AI Project Manager", slug: "project-manager" },

]

// const technologyCategories = [
//   { name: "Clinical Trial Management Software", slug: "clinical-trial-management-software" },
//   { name: "Electronic Data Transfer", slug: "electronic-data-transfer" },
// ]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#08052b] shadow-lg bg-blur">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/ericaiwhite.gif" alt="logo" width={250} height={100} />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-18  px-10 py-3 rounded-full text-white text-sm shadow-lg font-semibold">

          {/* <Link href="/" className="hover:text-orange-400 transition">Home</Link> */}
          <Link href="/" className="text-[15px] font-semibold text-white hover:text-gray-500">Home</Link>

          {/* <Link href="/about">About</Link> */}


          {/* Agents */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[15px] font-semibold text-white hover:text-gray-500">
              Agents
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {agentsLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/agents/${item.slug}`}
                  className="block px-6 py-3 text-xs hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[15px] font-semibold text-white hover:text-gray-500">
              Company
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {companyLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/company/${item.slug}`}
                  className="block px-6 py-3 text-xs hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Inisghts*/}
          <div className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-[15px] font-semibold text-white hover:text-gray-500">
              Insights
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-44 bg-white text-gray-700 rounded-xl shadow-2xl opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
              {insightsLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="block px-6 py-3 text-xs hover:bg-blue-50 hover:text-blue-600 hover:rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>


          <Link href="/contact" className="flex items-center gap-1 cursor-pointer text-[15px] font-semibold text-white hover:text-gray-500">Contact</Link>
        </nav>

        {/* RIGHT SIDE (only hamburger now) */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* MOBILE MENU */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#0a0736] z-50 transform transition-transform duration-300 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="p-6 space-y-4 text-white">

          {/* Close */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              ✕
            </button>
          </div>

          <Link href="/" className="block border-b pb-3">Home</Link>



          {/* Technologies */}
          {/* <div className="border-b pb-3">
            <button onClick={() => setTechnologiesOpen(!technologiesOpen)} className="flex justify-between w-full">
              Agents
            </button>

            {technologiesOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {technologyCategories.map((technology) => (
                  <Link key={technology.slug} href={`/technologies/${technology.slug}`} className="block text-sm">
                    {technology.name}
                  </Link>
                ))}
              </div>
            )}
          </div> */}
          {/* agents */}
          <div className="border-b pb-3">
            <button
              onClick={() => setAgentsOpen(!agentsOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Agents</span>

              <span className="text-xl font-bold">
                {agentsOpen ? "−" : "+"}
              </span>
            </button>

            {agentsOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {agentsLinks.map((item) => (
                  <Link key={item.slug} href={`/agents/${item.slug}`} className="block text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Company */}
          <div className="border-b pb-3">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Company</span>

              <span className="text-xl font-bold">
                {companyOpen ? "−" : "+"}
              </span>
            </button>

            {companyOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {companyLinks.map((item) => (
                  <Link key={item.slug} href={`/company/${item.slug}`} className="block text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* insights */}
          <div className="border-b pb-3">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex justify-between items-center w-full"
            >
              <span>Insights</span>

              <span className="text-xl font-bold">
                {insightsOpen ? "−" : "+"}
              </span>
            </button>

            {insightsOpen && (
              <div className="mt-3 pl-4 space-y-2 text-gray-300">
                {insightsLinks.map((item) => (
                  <Link key={item.slug} href={`/insights/${item.slug}`} className="block text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>




          <Link href="/contact" className="block border-b pb-3">Contact</Link>

        </div>
      </div>
    </header>
  )
}
