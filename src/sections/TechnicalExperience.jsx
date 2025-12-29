const TechnicalExperience = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4 text-yellow">Technical Experience</h1>

      {/* Game Dev Skills*/}
      <div className="bg-gray-800 p-5 rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">
            Game Development:
        </h2>

        {/* Tech Badges */}
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-m">Unity</span>
          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-m">C#</span>
          <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-m">C++</span>
          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-m">Unity Shader</span>
          <span className="px-3 py-1 bg-fuchsia-600 text-white rounded-full text-m">Game VFX</span>
        </div>
    
      </div>

      {/* Tech Tools */}
      <div className="bg-gray-800 p-5 rounded-lg mb-4">
        <h2 className="text-2xl font-semibold mb-2">
            Web & Tools:
        </h2>

        {/* Tech Badges */}
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-cyan-600 text-white rounded-full text-m">JavaScript</span>
          <span className="px-3 py-1 bg-green-600 text-white rounded-full text-m">GitHub</span>
          <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-m">Frontend</span>
          <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-m">Backend</span>
        </div>
      </div>   

    </section>
  )
}

export default TechnicalExperience