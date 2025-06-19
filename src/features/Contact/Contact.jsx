import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-24 bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="mb-4 text-sm font-semibold text-blue-400">Get In Touch</div>
      <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
      <p className="text-center max-w-xl text-gray-400 mb-10">
        Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="bg-gray-800 rounded-xl p-6 flex items-start gap-4">
            <Mail className="text-blue-500" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-300">shovonbiswas.cse@gmail.com</p>
              <a href="mailto:shovonbiswas.cse@gmail.com" className="text-blue-400 text-sm">Send an email</a>
            </div>
          </div>
          {/* Phone */}
          <div className="bg-gray-800 rounded-xl p-6 flex items-start gap-4">
            <Phone className="text-blue-500" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-gray-300">+880 1776752696</p>
              <a href="tel:+8801540581443" className="text-blue-400 text-sm">Make a call</a>
            </div>
          </div>
          {/* Location */}
          <div className="bg-gray-800 rounded-xl p-6 flex items-start gap-4">
            <MapPin className="text-blue-500" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-sm text-gray-300">
                Mirpur, Dhaka - 1216 <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-800 rounded-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Your Name</label>
              <input type="text" placeholder="Enter your name"
                     className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-sm">Your Email</label>
              <input type="email" placeholder="Enter your email"
                     className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="text-sm">Subject</label>
            <input type="text" placeholder="How can I help you?"
                   className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea placeholder="Your message here..."
                      className="w-full h-32 p-3 mt-1 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 font-medium">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
