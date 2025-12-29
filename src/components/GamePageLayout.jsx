const GamePageLayout = ({ image, title, description }) => {
  return (
    <div>
      <h1 className="my-4 text-4xl text-yellow font-bold">{title}</h1>

      <div className="flex space-x-4">
        <img src={image} alt={title} className="max-w-3/5 rounded-2xl"></img>

        <div className="flex flex-col justify-between w-full">
          <p className="text-justify text-xl">{description}</p>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center p-3 rounded-xl bg-blue-600 font-bold w-44 text-2xl"
          >
            PLAY
          </a>

        </div>
      </div>
    </div>
  );
};

export default GamePageLayout;
