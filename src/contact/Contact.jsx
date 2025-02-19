import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Have questions or need assistance? Feel free to contact us!
      </p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        {/* Contact Form */}
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send us a message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"></textarea>
            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
          <p className="text-gray-600">Reach out to us via phone, email, or visit our store.</p>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-purple-600 text-xl" />
            <p className="text-gray-700">+91 98765 XXXX</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-purple-600 text-xl" />
            <p className="text-gray-700">support@glassify.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-purple-600 text-xl" />
            <p className="text-gray-700">123 Street, New Delhi, India</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-purple-600 hover:text-purple-800"><FaFacebook size={24} /></a>
            <a href="#" className="text-purple-600 hover:text-purple-800"><FaInstagram size={24} /></a>
            <a href="#" className="text-purple-600 hover:text-purple-800"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
