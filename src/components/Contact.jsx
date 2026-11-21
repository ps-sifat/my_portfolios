import React, { lazy, Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";
import { styles } from "../style";
import { slideIn } from "../utils/motion";

import { useInView } from "../hooks/useInView";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const CONTACT_EMAIL = "mdsifatulislam2357@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/ps-sifat/";

// EmailJS keys come from .env (see .env.example). When they are missing the
// form still works: it opens the visitor's mail app with the message filled in.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_READY = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY,
);

const inputClass =
  "glass-input py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none focus:border-purple-500/50 focus-visible:ring-2 focus-visible:ring-[var(--accent)] transition-all font-medium text-[15px]";

const Field = ({ id, label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-white font-medium text-[14px]">
      {label}
    </label>
    {children}
    {error && (
      <span
        id={`${id}-error`}
        className="text-red-600 dark:text-red-400 text-xs pl-1 mt-1"
      >
        {error}
      </span>
    )}
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const earthRef = useRef(null);
  const earthNear = useInView(earthRef, { once: true, rootMargin: "300px" });
  const earthVisible = useInView(earthRef, { rootMargin: "0px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState({
    show: false,
    text: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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

  const showStatus = (text, type) => {
    setStatusMsg({ show: true, text, type });
    setTimeout(() => setStatusMsg({ show: false, text: "", type: "" }), 6000);
  };

  const openMailApp = () => {
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `${form.message}\n\n- ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    showStatus(
      "Your mail app should open with the message ready to send.",
      "success",
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!EMAILJS_READY) {
      openMailApp();
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Md. Sifatul Islam",
          from_email: form.email,
          to_email: CONTACT_EMAIL,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showStatus(
            "Thank you! I will get back to you as soon as possible. ❤️",
            "success",
          );
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showStatus(
            "Something went wrong. Please try again or email me directly.",
            "error",
          );
        },
      );
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      color: "text-purple-400",
    },
    {
      icon: FaLinkedin,
      text: "ps-sifat",
      href: LINKEDIN_URL,
      color: "text-blue-400",
    },
    {
      icon: FaGithub,
      text: "ps-sifat",
      href: "https://github.com/ps-sifat",
      color: "text-white",
    },
    {
      icon: FaWhatsapp,
      text: "+880 1850-499490",
      href: "https://wa.me/8801850499490",
      color: "text-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Dhaka, Bangladesh",
      href: null,
      color: "text-pink-400",
    },
  ];

  return (
    <section
      id="contact"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 0.75)}
          className="flex-[0.75] glass-card p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>

          <div className="mt-8 flex flex-col gap-4">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div
                  className={`text-xl ${info.color} p-2 rounded-lg bg-white/5 border border-white/5`}
                  aria-hidden="true"
                >
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
            <Field id="contact-name" label="Your Name" error={errors.name}>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="contact-email" label="Your Email" error={errors.email}>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="contact-subject" label="Subject" error={errors.subject}>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className={inputClass}
              />
            </Field>

            <Field id="contact-message" label="Your Message" error={errors.message}>
              <textarea
                id="contact-message"
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div aria-live="polite" role="status">
              {statusMsg.show && (
                <div
                  className={`p-4 rounded-xl border ${
                    statusMsg.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400"
                      : "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
                  } text-[14px]`}
                >
                  {statusMsg.text}
                </div>
              )}
            </div>

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

        <motion.div
          variants={slideIn("right", "tween", 0.2, 0.75)}
          ref={earthRef}
          className="xl:flex-1 xl:h-[620px] xl:self-center md:h-[550px] h-[350px] flex items-center justify-center"
        >
          {earthNear && (
            <Suspense fallback={null}>
              <EarthCanvas active={earthVisible} />
            </Suspense>
          )}
        </motion.div>
      </div>

      <footer className="w-full bg-[var(--bg-footer)] backdrop-blur-sm border-t border-[var(--border-color)] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-[14px] text-center md:text-left">
            &copy; {new Date().getFullYear()} Md Sifatul Islam. All rights
            reserved.
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
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-blue-400 transition-colors text-lg"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/8801850499490"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-green-400 transition-colors text-lg"
              title="WhatsApp"
              aria-label="WhatsApp"
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
