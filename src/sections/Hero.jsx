import GioImage from "../assets/GioImage.jpg";
import GikoScreenshot from "../assets/GikoScreenshot.png";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center relative scroll-mt-24">
      
      {/* Background image */}
      <img
        src={GikoScreenshot}
        alt="Background Picture"
        className="w-full h-100 object-cover opacity-85"
      />

      {/* Overlay circular image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="rounded-full border-3 border-yellow overflow-hidden w-90 shadow-lg -translate-y-20">
          <img
            src={GioImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <p className="text-4xl text-justify mt-10">
        Creative game developer with experience in building games using{" "}
        <span className="font-semibold text-yellow">Unity</span>. Bringing
        <span className="font-semibold text-yellow">
          {" "}
          creative ideas to life
        </span>{" "}
        through code, art, and gameplay. Dedicated to learning new tools,
        improving my skills, and creating{" "}
        <span className="font-semibold text-yellow">
          meaningful interactive experience.
        </span>
      </p>
    </section>
  );
};

export default Hero;
