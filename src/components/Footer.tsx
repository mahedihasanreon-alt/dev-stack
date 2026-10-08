import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const groups: Record<string, string[]> = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          /*  */
          <div>
            <div className="flex items-center gap-2">
              <img
                src="https://icon.icepanel.io/Technology/svg/React.svg"
                alt="logo"
                className="w-6 h-6"
              />
              <span className="font-bold text-white text-lg">Dev Stack</span>
            </div>
            <p className="text-sm mt-3 leading-relaxed">
              Curate your ideal development stack. Explore, compare, and build
              with confidence.
            </p>
            <div className="flex gap-4 mt-4 text-gray-500 text-lg">
              <a href="#" className="hover:text-white transition">
                <FiGithub />
              </a>
              <a href="#" className="hover:text-white transition">
                <FiTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(groups).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-3">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}