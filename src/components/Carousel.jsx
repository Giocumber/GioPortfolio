import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReactPlayer from "react-player";

const Carousel = ({ slides = []}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return <div>No slides</div>;

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full h-50 md:h-90 lg:h-124 rounded overflow-hidden relative">
      {currentSlide.type === "youtube" ? (
        <ReactPlayer
          src={currentSlide.url}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
        />
      ) : (
        <img
          src={currentSlide.src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      )}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-200 hover:text-black"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer p-2 rounded-full shadow-lg hover:bg-gray-200 hover:text-black"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>
    </div>
  );
};

export default Carousel;
