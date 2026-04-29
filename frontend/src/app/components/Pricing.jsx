"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

/* 🔢 Counter */
function Counter({ end }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (isInView) {
      let start = 0;
      const duration = 1200;
      const increment = end / (duration / 16);

      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCount(Math.floor(start));
      }, 16);
    }

    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count}</span>;
}

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const API =
    "https://ericsolutions-subscriptions-api-239728653782.europe-west1.run.app/api/v1/subscription-plans?status=active&page=1&perPage=20";

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data.data);
      setPlans(res.data.data || []);
    } catch (err) {
      console.error("Error fetching plans:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-gray-200 text-black" id="pricing">
      {/* HEADING */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B5EA8]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600">Choose the plan that fits your workflow</p>
      </motion.div>

      {loading && <p className="text-center text-gray-500">Loading plans...</p>}

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => {
          const priceCents = plan.launch_active
            ? plan.launch_price_cents
            : plan.base_price_cents;

          const price = priceCents ? priceCents / 100 : 0;

          const symbol = plan.currency === "USD" ? "$" : "₹";

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg p-7 
             hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* OFFER BADGE */}
              {plan.launch_active && (
                <span
                  className="relative inline-flex items-center mb-3 text-xs font-semibold 
                     bg-gradient-to-r from-green-100 to-green-200 text-green-700 
                     px-3 py-1 rounded-full shadow-sm"
                >
                  🚀 Limited Offer
                </span>
              )}

              {/* OFFER DATE */}
              <p className="relative text-sm text-gray-600 mb-2">
                <span className="font-semibold text-gray-800">Offer:</span>{" "}
                <span className="text-[#0B5EA8] font-semibold">
                  {plan.offer_start_date} → {plan.offer_end_date}
                </span>
              </p>

              {/* NAME */}
              <h3 className="relative text-2xl font-bold capitalize text-gray-900 mb-1">
                {plan.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative text-sm text-gray-500 mb-5 leading-relaxed">
                {plan.description}
              </p>

              {/* PRICE SECTION */}
              <div className="relative mb-4">
                <p className="text-4xl font-extrabold text-[#0B5EA8] flex items-end gap-1">
                  {symbol}
                  <Counter end={Number(price) || 0} />
                  <span className="text-base font-medium text-gray-500 ml-1">
                    / {plan.billing_cycle}
                  </span>
                </p>

                {/* ORIGINAL PRICE */}
                {plan.launch_active && (
                  <p className="text-sm text-red-400 line-through mt-1">
                    {symbol}
                    {plan.base_price_cents / 100}
                  </p>
                )}
              </div>

              {/* DIVIDER */}
              <div className="border-t border-dashed border-gray-300 my-5"></div>

              {/* FEATURES / DETAILS */}
              <div className="space-y-3 text-sm relative">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0B5EA8] text-base" />
                  <span className="text-gray-700">
                    <span className="font-medium">Credits:</span>{" "}
                    {plan.credits_included}
                  </span>
                </div>

                {/* <div className="flex gap-2">
      <FaCheckCircle className="text-[#0B5EA8]" />
      <span>Status: {plan.status}</span>
    </div> */}

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0B5EA8] text-base" />
                  <span className="text-gray-700">
                    <span className="font-medium">Currency:</span>{" "}
                    {plan.currency}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#0B5EA8] text-base" />
                  <span className="text-gray-700">
                    <span className="font-medium">Lock-in:</span>{" "}
                    {plan.locking_period_months} months
                  </span>
                </div>

                {/* 
    <div className="flex gap-2">
      <FaCheckCircle className="text-[#0B5EA8]" />
      <span>
        Created: {new Date(plan.created_at).toLocaleDateString()}
      </span>
    </div>

    <div className="flex gap-2">
      <FaCheckCircle className="text-[#0B5EA8]" />
      <span>
        Updated: {new Date(plan.updated_at).toLocaleDateString()}
      </span>
    </div> */}

                {/* <div className="flex gap-2">
      <FaCheckCircle className="text-[#0B5EA8]" />
      <span>Plan ID: {plan.id}</span>
    </div> */}

                {/* FEATURES OBJECT */}
                {/* {plan.features &&
      Object.keys(plan.features).map((key, i) => (
        <div key={i} className="flex gap-2">
          <FaCheckCircle className="text-[#0B5EA8]" />
          <span>{key}</span>
        </div>
      ))} */}
              </div>

              {/* BUTTON */}
              <Link
                href="https://ai.ericsolution.com/en/sign-up?plan"
                className="relative block mt-7 w-full text-center 
               bg-gradient-to-r from-[#0B5EA8] to-[#1D4ED8] 
               text-white py-2.5 rounded-xl font-semibold 
               shadow-md hover:shadow-lg 
               hover:scale-[1.02] active:scale-[0.98]
               transition-all duration-300"
              >
                Get Started →
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
