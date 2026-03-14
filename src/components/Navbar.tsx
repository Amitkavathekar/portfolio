export default function Navbar() {
    return (
      <header className="fixed top-0 w-full bg-white shadow z-50">

        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <h1 className="text-xl font-bold">
            Amit <span className="text-orange-500">Kavathekar</span>
          </h1>

          <nav className="hidden md:flex gap-6 font-medium">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>

          </nav>

          <a
            href="#contact"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Contact
          </a>

        </div>

      </header>
    );
  }