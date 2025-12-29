import { IoLogoGithub } from "react-icons/io5";
import { FaItchIo } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

// function to scroll to section
const sections = ["home", "projects", "about"];
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const Navigation = () => {
  // helper function to get the active nav depending on the user scroll
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    // Wait for DOM + IntersectionObserver to attach
    requestAnimationFrame(() => {
      scrollToSection(location.state.scrollTo);
    });
  }, [location.state]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    
    return () => observer.disconnect();
  }, [location.pathname]);

  // Function to generate class string
  const getButtonStyle = (name) => {
    return `cursor-pointer text-2xl ${
      active === name ? "underline text-yellow font-semibold" : "text-gray-400"
    }`;
  };

  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    if(isHome){
      scrollToSection(section);
    }else{
      navigate("/", { state: { scrollTo: section } });
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-3 bg-black ">
      <div className="flex justify-between items-center w-full ">
        <button
          onClick={() => handleButtonClick("home")}
          className="cursor-pointer text-start"
        >
          <h1 className="text-5xl font-bold text-yellow">Gio Salceda</h1>
          <h2 className="text-xl ">Game Developer</h2>
        </button>


        <div className="flex space-x-12 text-2xl">
          <button
            onClick={() => handleButtonClick("home")}
            className={getButtonStyle("home")}
          >
            <h2>HOME</h2>
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className={getButtonStyle("projects")}
          >
            <h2>PROJECTS</h2>
          </button>

          <button
            onClick={() => handleButtonClick("about")}
            className={getButtonStyle("about")}
          >
            <h2>ABOUT</h2>
          </button>
        </div>

        <div className="flex space-x-4">
          <Socials
            link="https://linkedin.com/your-username"
            icon={FaLinkedin}
          />
          <Socials link="https://itch.io/your-username" icon={FaItchIo} />
          <Socials
            link="https://github.com/your-username"
            icon={IoLogoGithub}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
