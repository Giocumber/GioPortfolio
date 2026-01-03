const badgeStyle = (color) => {
  return `px-3 py-1 bg-${color}-600 text-white rounded-full text-m`
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
          <span className={badgeStyle("cyan")}>Unity</span>
          <span className={badgeStyle("green")}>C#</span>
          <span className={badgeStyle("gray")}>C++</span>
          <span className={badgeStyle("purple")}>Unity Shader</span>
          <span className={badgeStyle("fuchsia")}>Game VFX</span>
        </div>
    
      </div>

      {/* Tech Tools */}
      <div className="bg-gray-800 p-5 rounded-lg mb-4">

        <h2 className="text-lg lg:text-2xl font-semibold mb-2">
            Web & Tools:
        </h2>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 ">
          <span className={badgeStyle("blue")}>JavaScript</span>
          <span className={badgeStyle("green")}>GitHub</span>
          <span className={badgeStyle("gray")}>Frontend</span>
          <span className={badgeStyle("purple")}>Backend</span>
        </div>
      </div>   

    </section>
  )
}

export default TechnicalExperience