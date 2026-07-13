import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaHeart 
} from "react-icons/fa";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

// Configuration for EmailJS (Replace with actual credentials)
const EMAILJS_SERVICE_ID = "service_xxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxx";
const EMAILJS_PUBLIC_KEY = "user_xxxxxx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState({ show: false, text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Md. Sifatul Islam",
          from_email: form.email,
          to_email: "mdsifatulislam2357@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatusMsg({
            show: true,
            text: "Thank you! I will get back to you as soon as possible. ❤️",
            type: "success",
          });

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setStatusMsg({ show: false, text: "", type: "" });
          }, 6000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatusMsg({
            show: true,
            text: "Something went wrong. Please try again or email me directly.",
            type: "error",
          });
          setTimeout(() => {
            setStatusMsg({ show: false, text: "", type: "" });
          }, 6000);
        }
      );
  };

  const contactInfo = [
    { icon: FaEnvelope, text: "mdsifatulislam2357@gmail.com", href: "mailto:mdsifatulislam2357@gmail.com", color: "text-purple-400" },
    { icon: FaLinkedin, text: "Md. Sifatul Islam", href: "https://linkedin.com/in/md-sifatul-islam", color: "text-blue-400" },
    { icon: FaGithub, text: "ps-sifat", href: "https://github.com/ps-sifat", color: "text-white" },
    { icon: FaWhatsapp, text: "+880 1850-499490", href: "https://wa.me/8801850499490", color: "text-green-400" },
    { icon: FaMapMarkerAlt, text: "Dhaka, Bangladesh", href: null, color: "text-pink-400" },
  ];

  return (
    <section id="contact" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        {/* Left Form Panel */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.75)}
          className="flex-[0.75] glass-card p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          {/* Quick contact list */}
          <div className="mt-8 flex flex-col gap-4">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`text-xl ${info.color} p-2 rounded-lg bg-white/5 border border-white/5`}>
                  <info.icon />
                </div>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-[15px]"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className="text-gray-300 text-[15px]">{info.text}</span>
                )}
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-medium text-[14px]">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-purple-500/50 transition-all font-medium text-[15px]"
              />
              {errors.name && <span className="text-red-400 text-xs pl-1 mt-1">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-medium text-[14px]">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-purple-500/50 transition-all font-medium text-[15px]"
              />
              {errors.email && <span className="text-red-400 text-xs pl-1 mt-1">{errors.email}</span>}
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-medium text-[14px]">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-purple-500/50 transition-all font-medium text-[15px]"
              />
              {errors.subject && <span className="text-red-400 text-xs pl-1 mt-1">{errors.subject}</span>}
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-medium text-[14px]">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="glass-input py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-purple-500/50 transition-all font-medium resize-none text-[15px]"
              />
              {errors.message && <span className="text-red-400 text-xs pl-1 mt-1">{errors.message}</span>}
            </div>

            {/* Status Message Notification */}
            {statusMsg.show && (
              <div
                className={`p-4 rounded-xl border ${
                  statusMsg.type === "success"
                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                    : "bg-red-500/10 border-red-500/20 text-red-400"
                } text-[14px]`}
              >
                {statusMsg.text}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500/30"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="text-[13px]" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Right 3D Earth Panel */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.75)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#050816]/80 backdrop-blur-sm border-t border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-[14px] text-center md:text-left">
            &copy; {new Date().getFullYear()} Md Sifatul Islam. All rights reserved.
          </p>

          <p className="text-secondary text-[14px] flex items-center gap-1.5 justify-center">
            <span>Made with</span>
            <FaHeart className="text-pink-500 animate-pulse text-[12px]" />
            <span>by sifat</span>
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/ps-sifat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors text-lg"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/md-sifatul-islam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-blue-400 transition-colors text-lg"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/8801850499490"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-green-400 transition-colors text-lg"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;