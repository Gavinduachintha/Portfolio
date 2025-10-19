import projects from "../../data/projects.js";
import Card from "../../components/ui/Card.jsx";
import { motion } from "framer-motion";

export default function ProjectGrid() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[72rem]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3ECF8E] dark:text-[#3ECF8E]">
            Featured Projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and side projects. Each project represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={itemVariants}
              className="h-full"
            >
              <Card
                title={project.title}
                description={project.summary}
                image={project.image}
                href={project.url}
                tags={project.tags}
                year={project.year}
                as="div"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State if no projects */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              I'm working on some exciting projects. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
