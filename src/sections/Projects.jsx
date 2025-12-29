import Card from "../components/Card";
import { Link } from "react-router-dom";

const developedGamesMap = [
  {
    title: "Santelmo (2025)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "7",
    time: "2 Weeks" ,
    link: "/santelmo"
  },

  {
    title: "Dont Touch My Duck: Crops and Quack (2025)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "5",
    time: "1 Month" ,
    link: "/dont-touch-my-duck"
  },

  {
    title: "Ratatata (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Month",
    link: "/ratatata"
  },

  {
    title: "Keeno (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week",
    link: "/keeno"
  },

  {
    title: "Giko (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week",
    link: "/giko"
  },

  {
    title: "Bullet Boi (2023)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "2",
    time: "1 Month",
    link: "/bullet-boi"

  },

  {
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
    <section>
      <h1 className="text-4xl font-bold mb-5 text-yellow">Developed Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        {developedGamesMap.map((game, index) => (
          <Card 
            key={index}
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


