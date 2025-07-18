import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ContactInfo = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }
    console.log(ContactInfo);
    alert("Your message has been sent successfully!");

    handleReset();
  }


  return (
    <div className="min-h-screen py-24 px-6 
                    bg-gray-50 dark:bg-gray-900 
                    text-gray-900 dark:text-white 
                    flex flex-col items-center justify-center 
                    transition-colors duration-300">
      
      <div className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
        Get In Touch
      </div>

      <h2 className="text-4xl font-bold mb-2">Contact Me</h2>

      <p className="text-center max-w-xl text-gray-700 dark:text-gray-400 mb-10">
        Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex items-start gap-4">
            <Mail className="text-blue-600 dark:text-blue-400" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">shovonbiswas.cse@gmail.com</p>
              <a href="mailto:shovonbiswas.cse@gmail.com" className="text-blue-600 dark:text-blue-400 text-sm">Send an email</a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex items-start gap-4">
            <Phone className="text-blue-600 dark:text-blue-400" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">+880 1776752696</p>
              <a href="tel:+8801540581443" className="text-blue-600 dark:text-blue-400 text-sm">Make a call</a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex items-start gap-4">
            <MapPin className="text-blue-600 dark:text-blue-400" size={28} />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mirpur, Dhaka - 1216 <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-800 dark:text-gray-200">Your Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value = {name}
                placeholder="Enter your name"
                className="w-full p-3 mt-1 
                           bg-gray-100 dark:bg-gray-700 
                           rounded-lg text-gray-900 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-800 dark:text-gray-200">Your Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                placeholder="Enter your email"
                className="w-full p-3 mt-1 
                           bg-gray-100 dark:bg-gray-700 
                           rounded-lg text-gray-900 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-800 dark:text-gray-200">Subject</label>
            <input
              type="text"
              placeholder="How can I help you?"
              onChange={(e) => setSubject(e.target.value)}
              value = {subject}
              className="w-full p-3 mt-1 
                         bg-gray-100 dark:bg-gray-700 
                         rounded-lg text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-800 dark:text-gray-200">Message</label>
            <textarea
              placeholder="Your message here..."
              onChange={(e) => setMessage(e.target.value)}
              value = {message}
              className="w-full h-32 p-3 mt-1 
                         bg-gray-100 dark:bg-gray-700 
                         rounded-lg text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white p-3 rounded-lg 
                       flex items-center justify-center gap-2 font-medium 
                       transition"
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
