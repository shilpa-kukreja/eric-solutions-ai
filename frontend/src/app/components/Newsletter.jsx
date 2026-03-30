"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import {UserRound} from "lucide-react";
import { useRouter } from "next/navigation";


export default function NewsletterSection() {

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  

  return (
    <section className="relative py-12 px-10 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Animated Heading */}
        <motion.div
            className="text-center mb-5"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-4xl sm:text-5xl font-bold text-black">
                        Clinical innovation deserves <span className=" text-orange-700">modern infrastructure.
                        </span>
                   </h1>
                   
                
            </motion.div>


      
  {/* Description */}
        <p className="text-gray-200 mb-8 text-lg md:text-base max-w-xl mx-auto text-gray-800">
          Eric AI is built to deliver it.

        </p>

        
       

    <div className="flex items-center justify-center">
  <button
    type="submit"
    onClick={() => router.push("/contact")}
    className="bg-blue-900 hover:bg-[#0f2777] text-white px-6 py-3 rounded-lg transition w-full sm:w-auto flex items-center justify-center gap-2"
  >
    {/* <UserRound /> */}
    <span className="text-2xl pb-2">👉 </span>Request a Demo
  </button>
</div>



      </div>
    </section>
  );
}
