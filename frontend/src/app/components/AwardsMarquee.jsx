"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {motion} from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";

/* ===================== REVIEWS DATA ===================== */

const reviews1 = [
  {
    id: 1,
    name: "Rakesh Malhotra",
    role: "Senior Business Consultant",
    company: "TechCorp Solutions",
    rating: 5,
    review: "Tanushree Group impressed me with their transparency and commitment. The entire experience felt professional, reassuring, and genuinely client focused.",
    avatarColor: "bg-gradient-to-br from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    name: "Neha Kapoor",
    role: "Chartered Accountant",
    company: "Innovate Ltd.",
    rating: 5,
    review: "What stood out was their attention to detail and timely delivery. Tanushree Group delivers exactly what they promise.",
    avatarColor: "bg-gradient-to-br from-purple-500 to-pink-400"
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "IT Project Manager",
    company: "Global Enterprises",
    rating: 4,
    review: "From first interaction to final handover, everything was smooth and well managed. A brand built on trust.",
    avatarColor: "bg-gradient-to-br from-amber-500 to-orange-400"
  },
  {
    id: 4,
    name: "Pooja Sharma",
    role: "Education Counselor",
    company: "NextGen Tech",
    rating: 5,
    review: "Their approach toward education reflects genuine care and long-term vision. It is reassuring to see values driving decisions.",
    avatarColor: "bg-gradient-to-br from-emerald-500 to-teal-400"
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    role: "Real Estate Investor",
    company: "Digital Solutions Inc.",
    rating: 5,
    review: "Tanushree Group understands real estate deeply. Their projects reflect quality, planning, and long-term value.",
    avatarColor: "bg-gradient-to-br from-red-500 to-rose-400"
  },
  {
    id: 6,
    name: "Anjali Mehra",
    role: "School Administrator",
    company: "Growth Partners",
    rating: 4,
    review: "The learning environment created by Tanushree Group is thoughtful and inspiring. It truly focuses on holistic development.",
    avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
  },
  {
    id: 7,
    name: "Vikram Singh",
    role: "Operations Head, Logistics Firm",
    company: "Cloud Systems",
    rating: 5,
    review: "Professionalism, ethics, and clarity define their working style. A dependable group to associate with.",
    avatarColor: "bg-gradient-to-br from-green-500 to-lime-400"
  },
  {
    id: 8,
    name: "Nitin Arora",
    role:  "Hospitality Consultant",
    company: "StartUp Hub",
    rating: 5,
    review: "Their hospitality philosophy feels warm and personal. Guests are treated with care, not formality.",
    avatarColor: "bg-gradient-to-br from-violet-500 to-purple-400"
  }
];

const reviews2 = [
   {
    id: 9,
    name: "Shalini Khanna",
    role: "Interior Designer",
    company: "DataTech Inc",
    rating: 5,
    review: "The quality and planning of their spaces make my work easier. Tanushree Group builds with foresight.",
    avatarColor: "bg-gradient-to-br from-rose-500 to-pink-400"
  },
  {
    id: 10,
    name: "Rajeev Bansal",
    role: "Manufacturing Business Owner",
    company: "PeopleFirst Corp",
    rating: 4,
    review: "What I value most is their honesty and commitment to timelines. Rare qualities in today’s market.",
    avatarColor: "bg-gradient-to-br from-sky-500 to-blue-400"
  },
  {
    id: 11,
    name: "Kavita Joshi",
    role: "Parent and Education Advocate",
    company: "WealthBuilders",
    rating: 5,
    review: "Tanushree Group’s educational initiatives focus on real learning and values. That makes a lasting difference.",
    avatarColor: "bg-gradient-to-br from-orange-500 to-amber-400"
  },
  {
    id: 12,
    name: "Deepak Mishra",
    role: "Civil Engineering Consultant",
    company: "BrandBoost",
    rating: 4,
    review: "Their construction standards and execution quality reflect strong leadership and disciplined processes.",
    avatarColor: "bg-gradient-to-br from-fuchsia-500 to-purple-400"
  },
  {
    id: 13,
    name: "Mohit Choudhary",
    role: "Senior Sales Manager",
    company: "LogiTech Solutions",
    rating: 5,
    review: "The team is responsive, respectful, and professional. You always feel heard and valued.",
    avatarColor: "bg-gradient-to-br from-teal-500 to-cyan-400"
  },
  {
    id: 14,
    name: "Rahul Tandon",
    role: "Senior Marketing Strategist",
    company: "InnovateLabs",
    rating: 5,
    review: "Tanushree Group brings clarity and structure to every interaction. Their professionalism reflects years of experience.",
    avatarColor: "bg-gradient-to-br from-yellow-500 to-amber-400"
  },
  {
    id: 15,
    name: "Meenakshi Saxena",
    role: "Human Resources Consultant",
    company: "RevenueMax",
    rating: 4,
    review: "The culture of integrity and respect is clearly visible in how the team works and communicates.",
    avatarColor: "bg-gradient-to-br from-indigo-500 to-blue-400"
  },
  {
    id: 16,
    name: "Arjun Patel",
    role: "Property Development Advisor",
    company: "HelpDesk Pro",
    rating: 5,
    review: "Their long-term vision and ethical approach make Tanushree Group a reliable name in the industry.",
    avatarColor: "bg-gradient-to-br from-emerald-500 to-green-400"
  }
];

/* ===================== CARD ===================== */

const ReviewCard = ({ review }) => (
  <div className="px-2 ">
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition border border-gray-100">
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`${review.avatarColor} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
        >
          <span className="text-xl font-bold">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-600">{review.role}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? "text-amber-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600 line-clamp-3">{review.review}</p>
    </div>
  </div>
);

/* ===================== SECTION ===================== */

export default function ReviewsSection() {
  return (
    <section className=" py-12 overflow-hidden">

      {/* animated text */}
      <motion.div
      className="text-center mb-12"
      initial={{opacity:0, y:80}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8, ease:"easeOut"}}
      viewport={{once:false}}>

          
             <h1 className="text-5xl font-light">
                  What Our <span className="font-medium text-[#1b3163]">Clients Say</span>
             </h1>
              <p className="text-gray-600 text-lg">
              Trusted by industry leaders
              </p>
          
      </motion.div>


      

      {/* TOP SLIDER */}
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="mb-10"
      >
        {reviews1.map((r) => (
          <SwiperSlide key={r.id}>
            <ReviewCard review={r} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTTOM SLIDER (REVERSE) */}
      <Swiper
        modules={[Autoplay]}
        loop
        speed={5000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {reviews2.map((r) => (
          <SwiperSlide key={r.id}>
            <ReviewCard review={r} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
