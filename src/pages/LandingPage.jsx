import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import About from "../sections/About";

const LandingPage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default LandingPage;
