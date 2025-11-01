import React, { useRef } from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
  
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 500);
  };

  return (
    <AnimatedSection>
      <div className="bg-black h-[100vh] flex justify-center items-center flex-col" >
      <h2 className="text-3xl font-semibold mb-4 text-center text-white">Contact Us</h2>
      <form
        ref={formRef}
        action="https://getform.io/f/bllqkddb" // 🔗 Replace with your own Getform.io endpoint
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
      >
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="w-full border border-gray-300 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition-all duration-200"
        >
          Send
        </button>
        </form>
        </div>
    </AnimatedSection>
  );
}
