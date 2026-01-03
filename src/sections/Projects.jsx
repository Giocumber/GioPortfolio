import Card from "../components/Card";
import Santelmo from "../assets/Santelmo.png"
import DontTouchMyDuck from "../assets/DontTouchMyDuck.png"
import Ratatata from "../assets/Ratatata.png"
import Keeno from "../assets/Keeno.png"
import Giko from "../assets/Giko.png"
import BulletBoi from "../assets/BulletBoi.png"
import GladiatorSiege from "../assets/GladiatorSiege.png"

const developedGamesMap = [
  {
    image: Santelmo,
    title: "Santelmo (2025)",
    details: `An action-adventure game created for the Bicol Myth Game Jam, 
      celebrating Bicolano culture and folklore. A finalist in the competition.`,
    people: "7",
    time: "2 Weeks" ,
    link: "/santelmo"
  },

  {
    image: DontTouchMyDuck,
    title: "Don't Touch My Duck (2025)",
    details: `A tower defense–farming hybrid that promotes agricultural awareness.
      National finalist at the Globe Go Gaming Game Dev Competition.`,
    people: "5",
    time: "1 Month" ,
    link: "/dont-touch-my-duck"
  },

  {
    image: Ratatata,
    title: "Ratatata (2024)",
    details: `A souls-like platformer where players control a rat wizard, 
      mastering precise movement and combat to survive encounters with dangerous creatures.`,
    people: "1",
    time: "1 Month",
    link: "/ratatata"
  },

  {
    image: Keeno,
    title: "Keeno (2024)",
    details: `A 3D casual stealth game where a rat sneaks in to grab one piece of cheese while the chef is busy, 
      quickly hiding when the chef turns around to avoid a deadly shotgun blast.`,
    people: "1",
    time: "1 Week",
    link: "/keeno"
  },

  {
    image: Giko,
    title: "Giko (2024)",
    details: `A 3D multiplayer cooperative game where two geckos must stay within range of each other while overcoming obstacles, 
      demanding precise coordination to avoid an explosive consequence.`,
    people: "1",
    time: "1 Week",
    link: "/giko"
  },

  {
    image: BulletBoi,
    title: "Bullet Boi (2023)",
    details: `A fast-paced 2D shooter where players weaponize their own flesh as bullets, 
      teleporting to each shot to aggressively reposition while battling relentless robotic enemies.`,
    people: "2",
    time: "1 Month",
    link: "/bullet-boi"

  },

  {
    image: GladiatorSiege,
    title: "Gladiator Siege (2023)",
    details: `A multiplayer casual game where players battle against each other 
      while defending their own base from opposing forces in fast-paced combat.`,
    people: "1",
    time: "1 Week",
    link: "/gladiator-siege"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-yellow">Developed Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {developedGamesMap.map((game, index) => (
          <Card 
            key={index}
            image={game.image}
            title={game.title}
            details={game.details}
            people={game.people}
            time={game.time}
            link={game.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;


