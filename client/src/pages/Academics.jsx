import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Academics() {
  const [items, setItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/academics")
      .then((r) => setItems(r.data))
      .catch(() => {});
  }, []);

  // Framer Motion scroll animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] bg-gray-50 px-6 md:px-16 py-20 text-gray-800"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT - Sticky Section */}
        <div className="md:sticky md:top-60 h-fit flex flex-col justify-center">
          <motion.h2
            style={{  opacity }}
            className="text-4xl md:text-5xl pt-100px font-bold font-serif mb-6"
          >
            Our Academics
          </motion.h2>
          <motion.p
            style={{ opacity }}
            className="text-gray-600 leading-relaxed text-lg"
          >
            Our school focuses on holistic education that nurtures curiosity,
            creativity, and leadership. Each academic program is designed to
            inspire growth and innovation.
          </motion.p>
        </div>

        {/* RIGHT - Scrollable Section */}
        <div className="space-y-24">
          {items.length === 0 && (
            <p className="text-gray-500 mt-10">No academics yet.</p>
          )}

          {items.map((i, index) => (
            <motion.div
              key={i.id}
              className="p-6 bg-white rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {i.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{i.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
