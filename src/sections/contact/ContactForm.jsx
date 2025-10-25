import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Phone,
  Download,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import {
  showSuccess,
  showError,
  showLoading,
  dismissToast,
} from "../../utils/toast";
import { ButtonSpinner } from "../../components/ui/LoadingSpinner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showError("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    const toastId = showLoading("Sending your message...");

    try {
      // Simulate API call - Replace with your actual email service
      // For EmailJS, you would use: emailjs.send(...)
      // For now, simulating a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dismissToast(toastId);
      showSuccess("Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      dismissToast(toastId);
      showError(
        "Failed to send message. Please try again or email me directly."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gavindu.al@gmail.com",
      href: "mailto:gavindu.al@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 71 634 4556",
      href: "tel:+94716344556",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Gavinduachintha",
      username: "@Gavinduachintha",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://twitter.com/yourname",
      username: "@yourname",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourname",
      username: "Gavindu Achintha",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3ECF8E] dark:text-[#3ECF8E]">
            Get In Touch
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just tech in
            general.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-neutral-900/60 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-800/50"
          >
            <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <MessageSquare size={20} className="text-[#3ECF8E]" />
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Name *
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                      errors.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-neutral-300 dark:border-neutral-700"
                    } bg-white dark:bg-neutral-800/40 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all`}
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Email *
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                      errors.email
                        ? "border-red-500 dark:border-red-500"
                        : "border-neutral-300 dark:border-neutral-700"
                    } bg-white dark:bg-neutral-800/40 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.subject
                      ? "border-red-500 dark:border-red-500"
                      : "border-neutral-300 dark:border-neutral-700"
                  } bg-white dark:bg-neutral-800/40 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.message
                      ? "border-red-500 dark:border-red-500"
                      : "border-neutral-300 dark:border-neutral-700"
                  } bg-white dark:bg-neutral-800/40 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3ECF8E] hover:bg-[#2fb573] disabled:bg-neutral-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <ButtonSpinner />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/60 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-800/50"
          >
            <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-[#3ECF8E]/20 text-blue-600 dark:text-[#3ECF8E]">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#3ECF8E] dark:hover:text-[#3ECF8E] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-neutral-900/60 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-800/50"
          >
            <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Connect With Me
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-200 hover:scale-105 group border border-neutral-200 dark:border-neutral-700/40"
                >
                  <div className="p-2 rounded-full bg-white dark:bg-neutral-900/60 shadow-sm group-hover:shadow-md transition-shadow">
                    <social.icon
                      size={20}
                      className="text-neutral-700 dark:text-neutral-300"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-0.5">
                      {social.label}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full"
          >
            <a
              href="/resume.pdf"
              download="Gavindu_Achintha_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3ECF8E] hover:bg-[#2fb573] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span>Download My Resume</span>
            </a>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#3ECF8E] rounded-xl p-6 text-white shadow-lg text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />

              <span className="font-semibold text-base">
                Open to Opportunities
              </span>
            </div>
            <p className="text-sm text-white/90">
              Currently available for internships, freelance projects, and
              collaborations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
