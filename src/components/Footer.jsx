import ShinyText from './ShinyText';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Shiny Name */}
        <ShinyText text="Srikar Mandava" speed={3} className="text-2xl font-bold text-green-400" />
        {/* Social Links */}
        <div className="flex gap-8 items-center">
          <a href="https://instagram.com/_srikaar3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
            {/* Instagram SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#181818"/><path d="M16.98 8.868a.868.868 0 1 1-1.736 0 .868.868 0 0 1 1.736 0Z" fill="#10b981"/><rect x="7.5" y="7.5" width="9" height="9" rx="4.5" stroke="#10b981" strokeWidth="1.5"/><rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" stroke="#10b981" strokeWidth="1.5"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/sai-srikar-mandava-60b4bb24b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            {/* LinkedIn SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#181818"/><path d="M8.5 10.5v5m0 0v-5m0 5h-1.5v-5H8.5v5Zm3.5 0v-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V15.5m-3 0h3m0 0v-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V15.5Z" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://github.com/srikarr3" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            {/* GitHub SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#181818"/><path d="M12 17.27c-3.31 0-6-2.69-6-6 0-2.21 1.2-4.15 3.09-5.19.23-.04.31.1.31.22v.87c-1.26-.27-1.53.61-1.53.61-.21.54-.51.68-.51.68-.42.29.03.28.03.28.46-.03.7.45.7.45.41.7 1.08.5 1.34.38.04-.3.16-.5.29-.61-1.01-.12-2.07-.5-2.07-2.22 0-.49.18-.89.47-1.2-.05-.12-.2-.6.04-1.25 0 0 .38-.12 1.25.46.36-.1.75-.15 1.13-.15.38 0 .77.05 1.13.15.87-.58 1.25-.46 1.25-.46.24.65.09 1.13.04 1.25.29.31.47.71.47 1.2 0 1.72-1.06 2.1-2.07 2.22.16.14.31.41.31.83v1.23c0 .12.08.26.31.22C16.8 15.12 18 13.18 18 11c0-3.31-2.69-6-6-6Z" fill="#10b981"/></svg>
          </a>
        </div>
        {/* Guideline/Motto */}
        <div className="text-gray-400 text-sm text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
          <span>Building with passion & purpose. © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;