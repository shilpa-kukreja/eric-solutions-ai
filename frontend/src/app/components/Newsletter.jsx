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
    <section className="relative py-30 px-10 bg-orange-400">
      <div className="max-w-4xl mx-auto text-center">

        {/* Animated Heading */}
        <motion.div
            className="text-center mb-12"
            initial={{opacity:0, y:80}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease:"easeOut"}}
            viewport={{once:false}}>
      
                
                   <h1 className="text-5xl font-bold text-[#1b3163]">
                        Register for <span className="font-medium text-white">Free Demo</span>
                   </h1>
                   
                
            </motion.div>


      
  {/* Description */}
        <p className="text-gray-200 mb-8 text-sm md:text-base max-w-xl mx-auto text-gray-800">
          Subscribe to our newsletter to receive the latest updates, insights, and news directly in your inbox.
        </p>

        
       

    <div className="flex items-center justify-center">
  <button
    type="submit"
    onClick={() => router.push("/contact")}
    className="bg-[#0a16be] hover:bg-[#0f2777] text-white px-6 py-3 rounded-lg transition w-full sm:w-auto flex items-center justify-center gap-2"
  >
    <UserRound />
    Register Now
  </button>
</div>



      </div>
    </section>
  );
}