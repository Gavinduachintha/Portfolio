import { siteConfig } from "../config/site.config.js";
import { Github,Linkedin,Twitter } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="mt-16 border-neutral-200">
      <div className="mx-auto max-w-[72rem] px-4 py-8 flex flex-grid justify-between">
        <p className="text-sm text-white">
          © {year} {siteConfig.author.name}. All rights reserved.
        </p>
        <div className="flex flex-grid">
          <Github size={18} className="text-white cursor-pointer hover:text-gray-500"/>
          <Linkedin size={18} className="ml-4 text-white cursor-pointer hover:text-gray-500"/>
          <Twitter size={18} className="ml-4 text-white cursor-pointer hover:text-gray-500"/>
        </div>
      </div>
    </footer>
  );
}
