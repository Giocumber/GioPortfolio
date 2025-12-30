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
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "7",
    time: "2 Weeks" ,
    link: "/santelmo"
  },

  {
    image: DontTouchMyDuck,
    title: "Dont Touch My Duck: Crops and Quack (2025)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "5",
    time: "1 Month" ,
    link: "/dont-touch-my-duck"
  },

  {
    image: Ratatata,
    title: "Ratatata (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Month",
    link: "/ratatata"
  },

  {
    image: Keeno,
    title: "Keeno (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week",
    link: "/keeno"
  },

  {
    image: Giko,
    title: "Giko (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week",
    link: "/giko"
  },

  {
    image: BulletBoi,
    title: "Bullet Boi (2023)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "2",
    time: "1 Month",
    link: "/bullet-boi"

  },

  {
    image: GladiatorSiege,
    title: "Gladiator Siege (2023)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week",
    link: "/gladiator-siege"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <h1 className="text-4xl font-bold mb-5 text-yellow">Developed Projects</h1>
      <div className="grid grid-cols-3 gap-6">
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


