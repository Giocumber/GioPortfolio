const badgeStyle = (color) => {
  return `px-3 py-1 ${color} text-white rounded-full text-m`
}

const TechnicalExperience = () => {
  return (
    <section>
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-yellow">Technical Experience</h1>

      {/* Game Dev Skills*/}
      <div className="bg-gray-800 p-5 rounded-lg mb-4">

        <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            Game Development:
        </h2>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 ">
          <span className={badgeStyle("bg-cyan-600")}>Unity</span>
          <span className={badgeStyle("bg-green-600")}>C#</span>
          <span className={badgeStyle("bg-gray-600")}>C++</span>
          <span className={badgeStyle("bg-purple-600")}>Unity Shader</span>
          <span className={badgeStyle("bg-fuchsia-600")}>Game VFX</span>
        </div>
    
      </div>

      {/* Tech Tools */}
      <div className="bg-gray-800 p-5 rounded-lg mb-4">

        <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            Web & Tools:
        </h2>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 ">
          <span className={badgeStyle("bg-blue-600")}>JavaScript</span>
          <span className={badgeStyle("bg-green-600")}>GitHub</span>
          <span className={badgeStyle("bg-gray-600")}>Frontend</span>
          <span className={badgeStyle("bg-purple-600")}>Backend</span>
        </div>
      </div>   

    </section>
  )
}

export default TechnicalExperience