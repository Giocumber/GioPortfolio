import DummyImage from "../assets/DummyImage.png";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TiGroup } from "react-icons/ti";

const Card = ({title, details, people, time}) => {
  return (
    <div className="border-2 border-gray-700 rounded-2xl overflow-hidden bg-gray-800 
    duration-200 ease-out hover:scale-102 cursor-pointer">
      
      {/* Image */}
      <img
        src={DummyImage}
        alt="Game Thumbnail"
        className="w-full h-55 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-gray-300 text-lg text-justify">
          {details}
        </p>

        {/* Dev Details */}
        <div className="flex justify-end space-x-4">
          <div className="flex items-center">
            <TiGroup/>
            <p>{people}</p>
          </div>
          
          <div className="flex items-center">
            <MdOutlineAccessTimeFilled/>
            <p>{time}</p>
          </div>

        </div>
      </div>

    </div>
  );
};


export default Card;
