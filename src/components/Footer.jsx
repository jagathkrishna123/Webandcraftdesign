import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6">
      {/* Title...................................................................................*/}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pb-16">
        <div>
          <h2 className="text-[40px] md:text-[50px] font-mont">Get started now!</h2>
          <p className="text-gray-400 text-[25px] mt-2 font-serif">
            It takes less than a minute of your time.
          </p>
        </div>
        <button className="border border-white font-mont font-semibold px-6 py-3 rounded-xs hover:bg-white hover:text-black transition cursor-pointer">
          Request a quote →
        </button>
      </div>

      {/* Footerrrrrrr..................................... */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-12 font-mont">
        {/* ........... */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <motion.ul className="space-y-2 text-gray-300 cursor-pointer" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <li>About</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Works</li>
            <li>Careers</li>
            <li>Contact</li>
          </motion.ul>
        </div>

        {/* ...........*/}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 cursor-pointer">
            <li>Branding</li>
            <li>Experience Design</li>
            <li>Technology</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/*............... */}
        <div>
          <h3 className="font-semibold mb-4">Other</h3>
          <motion.ul className="space-y-2 text-gray-300 cursor-pointer" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
            <li>Partnership</li>
            <li>Awards and Recognitions</li>
            <li>Insights</li>
            <li>Blogs</li>
            <li>Resource Augmentation</li>
            <li>Testimonials</li>
            <li>Our Clients</li>
            <li>Submit Feedback to Our CEO</li>
            <li>Download Brochure</li>
            <li>Sitemap</li>
          </motion.ul>
        </div>

        {/* ............... */}
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <ul className="space-y-3 text-gray-300 cursor-pointer">
            <li className="flex flex-row gap-3">
              <span className="font-medium">General Enquiry</span> : <p>+91 480 2733 111</p>
            </li>
            <li className="flex flex-row gap-3">
              <span className="font-medium">Sales Enquiry</span> : <p>+91 480 2733 555</p>
            </li>
            <li className="flex flex-row gap-3">
              <span className="font-medium">Email</span> : <p>info@webandcrafts.com</p>
            </li>
            <li className="flex flex-row gap-3">
              <span className="font-medium">HR Enquiry</span> : <p>+91 480 2733 999</p>
            </li>
            <li className="flex flex-row gap-3">
              <span className="font-medium">Whatsapp (Sales)</span> <p>: +91 8606 483 399</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
