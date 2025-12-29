import Card from "../components/Card";

const developedGamesMap = [
  {
    title: "Santelmo (2025)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "7",
    time: "2 Weeks" 
  },

  {
    title: "Dont Touch My Duck: Crops and Quack (2025)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "5",
    time: "1 Month" 
  },

  {
    title: "Ratatata (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Month" 
  },

  {
    title: "Keeno (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week" 
  },

  {
    title: "Giko (2024)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week" 
  },

  {
    title: "BulletBoi (2023)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "2",
    time: "1 Month" 
  },

  {
    title: "Gladiator Siege (2023)",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
              ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula.`,
    people: "1",
    time: "1 Week" 
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
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;


