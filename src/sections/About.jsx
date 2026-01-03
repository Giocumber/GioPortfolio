import Education from "./Education"
import TechnicalExperience from "./TechnicalExperience"

const About = () => {
  return (
    <div className="space-y-4 lg:space-y-10">
        <Education/>
        <TechnicalExperience/>
    </div>
  )
}

export default About