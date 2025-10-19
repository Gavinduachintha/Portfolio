import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Heart,
  Coffee,
  Award,
  BookOpen,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function AboutMe() {
  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "TypeScript", level: 80, category: "Language" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const stats = [
    { icon: Code2, value: "2+", label: "Years Experience" },
    { icon: Rocket, value: "10+", label: "Projects Completed" },
    { icon: Coffee, value: "∞", label: "Cups of Coffee" },
    { icon: Award, value: "5+", label: "Certifications" },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful user experiences",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Exploring new technologies and frameworks",
    },
    {
      icon: "📚",
      title: "Learning",
      description: "Constantly improving my skills",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that make a
            difference
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-5xl">
                  👨‍💻
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                Gavindu Achintha
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Full Stack Developer
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                <a
                  href="https://github.com/Gavinduachintha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:gavindu.al@gmail.com"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* Quick Stats */}
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Sri Lanka
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Experience
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    2+ Years
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Available
                  </span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    For Hire
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Story
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Hi! I'm a passionate Full Stack Developer with a love for
                  creating elegant solutions to complex problems. I specialize
                  in building modern web applications using cutting-edge
                  technologies like React, Node.js, and PostgreSQL.
                </p>
                <p>
                  My journey in web development started with a curiosity about
                  how websites work, and it has evolved into a career focused on
                  creating user-centric applications that make a real impact. I
                  believe in writing clean, maintainable code and following best
                  practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge with the developer community. I'm always eager to
                  learn and grow as a developer.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-200"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                  <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {skill.category}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900">
                  <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I Love
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors duration-200"
                  >
                    <div className="text-3xl mb-2">{interest.icon}</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
