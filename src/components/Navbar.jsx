export const Navbar = () => {
  return (
    <nav className="bg-gray-gradient text-black fixed top-0 left-0 bg-gray-200 w-full h-16 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-black uppercase text-indigo-600">
            DHNAM
          </h1>
        </div>
        <div className="hidden md:flex space-x-4 text-xl">
          <a href="#home" className="hover:text-gray-700 font-semibold transition-all hover:scale-105">
            Home
          </a>
          <a href="#about" className="hover:text-gray-700 font-semibold transition-all hover:scale-105">
            About
          </a>
          <a href="#projects" className="hover:text-gray-700 font-semibold transition-all hover:scale-105">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-700 font-semibold transition-all hover:scale-105">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
