import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import school from "../assets/school.jpg"
export default function ExpandImageOnScroll() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <div className="h-[150vh] flex items-center justify-center bg-black ">
      <motion.img
        ref={ref}
        src={school}
        alt="School"
        animate={{ scale: inView ? 1.2 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-[70%] rounded-2xl shadow-xl"
      />
    </div>
  );
}
