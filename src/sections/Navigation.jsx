import { IoLogoGithub } from "react-icons/io5";
import { FaItchIo } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = ({ link, icon: Icon }) => {
  return (
    <a
      href={link}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security best practice
      className="text-2xl hover:text-yellow "
    >
      <Icon className="size-13" />
    </a>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-3 bg-black">
      <div className="flex justify-between items-center w-full ">
        <Link to="/" className="text-5xl font-bold text-yellow">Gio Salceda</Link>

        <div className="flex space-x-3 h-fit">
          <Socials link="https://linkedin.com/your-username" icon={FaLinkedin} />
          <Socials link="https://itch.io/your-username" icon={FaItchIo} />
          <Socials link="https://github.com/your-username" icon={IoLogoGithub} />
        </div>
      </div>

      <h2 className="text-xl">Game Developer</h2>
    </nav>
  );
};

export default Navigation;