"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Newsletter from "../../components/Newsletter";

export default function AboutPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/team/list`,
      );
      setTeam(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <Navbar />

        <section className="py-12 md:py-6 text-center px-6 mt-40 bg-white">
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold ">
            Our Team Leader
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-4">
            Meet The <span className="text-[#0B5EA8]"> Brains</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Behind The <span className="text-[#0B5EA8]"> Eric AI</span>
          </h2>
        </section>

        {/* TEAM LEADERS */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {/* LOADING */}
          {team.length === 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-8 flex gap-5 animate-pulse"
                >
                  <div className="w-16 h-16 bg-gray-300 rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-4 bg-gray-300 w-1/2 rounded" />
                    <div className="h-3 bg-gray-200 w-1/3 rounded" />
                    <div className="h-3 bg-gray-200 w-full rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : team.length === 0 ? (
            /* EMPTY STATE */
            <div className="text-center text-gray-500">
              No team members found
            </div>
          ) : (
            /* DATA */
            <div className="grid md:grid-cols-2 gap-8">
              {team
                .sort((a, b) => a.order - b.order) // extra safety
                .map((member) => (
                  <div
                    key={member._id}
                    className="bg-white rounded-xl shadow-md p-8 flex gap-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                  >
                    {/* IMAGE */}
                    <img
                      src={
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}/${member.image?.url}` ||
                        "/default-user.png" // fallback image
                      }
                      className="w-16 h-16 rounded-full object-cover border"
                      alt={member.name}
                    />

                    <div className="flex-1">
                      {/* NAME */}
                      <h3 className="font-semibold text-lg">{member.name}</h3>

                      {/* DESIGNATION */}
                      <p className="text-sm text-gray-500 mb-2">
                        {member.designation}
                      </p>

                      {/* QUOTE */}
                      <p className="text-gray-400 text-sm sm:text-[18px] mb-4 line-clamp-3">
                        "{member.quote}"
                      </p>

                      {/* SOCIAL LINKS */}
                      <div className="flex gap-4">
                        {member.socialLinks?.email && (
                          <a
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-[#1877F2] hover:scale-110 transition-transform duration-300 inline-block"
                          >
                            <MdEmail size={21} />
                          </a>
                        )}

                          {member.socialLinks?.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="cursor-pointer text-black hover:scale-110 transition">
                              <FaSquareXTwitter size={19} />
                            </span>
                          </a>
                        )}

                        {member.socialLinks?.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="cursor-pointer text-blue-600 hover:scale-110 transition">
                              <FaLinkedin size={19} />
                            </span>
                          </a>
                        )}

                        {member.socialLinks?.facebook && (
                          <a
                            href={member.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="cursor-pointer text-[#1877F2] hover:scale-110 transition">
                              <FaFacebook size={19} />
                            </span>
                          </a>
                        )}

                        {member.socialLinks?.instagram && (
                          <a
                            href={member.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="cursor-pointer text-[#E4405F] hover:scale-110 transition">
                              <FaInstagram size={19} />
                            </span>
                          </a>
                        )}

                      
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </section>
        <Newsletter />
      </div>

      <Footer />
    </>
  );
}
