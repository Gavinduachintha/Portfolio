// Keep project data separate from UI for easy maintenance.
const projects = [
  {
    slug: "looma-email-dashboard",
    title: "Looma - Personal AI Email Summarizer",
    summary:
      "AI-powered email management platform with Gmail integration, real-time analytics, and smart calendar synchronization.",
    url: "https://github.com/Gavinduachintha/Looma",
    tags: [
      { name: "React", color: "#61DAFB" },
      "Node.js",
      "PostgreSQL",
      "Gmail API",
      "AI",
    ],
    year: 2025,
    image: "/src/assets/images/looma.jpg",
  },
  {
    slug: "shorty-url-shortener",
    title: "Shorty - URL Shortener",
    summary:
      "Modern URL shortener with analytics tracking, custom branding, and beautiful responsive design built with React and Supabase.",
    url: "https://github.com/Gavinduachintha/Shorty",
    tags: ["React", "Supabase", "Tailwind CSS", "Vite"],
    year: 2025,
    image: "/src/assets/images/Shorty.jpg",
  },
  {
    slug: "petreunification",
    title: "Pet  Connect - Lost Pet Reunification System",
    summary:
      "A web-based system that helps reunite lost pets with their owners through a unique QR code attached to the pet's collar. When the QR code is scanned, it opens a mobile-friendly webpage showing the pet's profile and the owner's contact information.",
    url: "https://api.github.com/repos/Gavinduachintha/PetReunification",
    tags: ["React", "Supabase", "Tailwind CSS", "Vite"],
    year: 2025,
    image: "/src/assets/images/PetConnnect.jpg",
  },
];
export default projects;
