const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-10 lg:mt-20 p-5 lg:px-20 lg:py-10">
      <h1 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4 text-yellow">
        Let's turn ideas to reality.
      </h1>

      <div className="flex-row space-y-4 lg:space-y-0 lg:flex items-center space-x-2 ">
        <p className="text-md lg:text-xl text-justify">
          If you’re looking for a developer who’s ready to make it happen, let’s
          work together!
        </p>

        <a
          href="/GioSalceda-CV.pdf"
          download
          className="text-blue-500 hover:underline border rounded-sm p-2"
        >
          Download my CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;
