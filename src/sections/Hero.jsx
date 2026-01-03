import GioImage from "../assets/GioImage.jpg";
import Background from "../assets/Background.png";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center scroll-mt-24 space-y-4 lg:space-y-8">
      
      {/* Hero Section Image*/}
      <div className="relative w-full ">
        {/* Background image */}
        <img
          src={Background}
          alt="Background Picture"
          className="w-full h-70 lg:h-100 object-cover opacity-85"
        />

        {/* Overlay circular image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="rounded-full border-3 border-yellow overflow-hidden w-60 lg:w-90 shadow-lg">
            <img
              src={GioImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <p className="text-lg lg:text-4xl lg:text-justify">
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
