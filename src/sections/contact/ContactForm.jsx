import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Phone } from "lucide-react";

export default function ContactForm() {
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
      value: "+94 XX XXX XXXX",
      href: "tel:+94XXXXXXXXX",
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
