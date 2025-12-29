import GamePageLayout from "../components/GamePageLayout";
import GikoScreenshot from "../assets/GikoScreenshot.png";
import ContributionList from "../components/ContributionList";

const GladiatorSiegePage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Gladiator Siege"}
        image={GikoScreenshot}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
      />

      <ContributionList
        role={"Solo Dev | Gameplay Programmer"}
        contributions={`
          Gameplay Systems:
          - Designed and implemented core gameplay mechanics using Unity and C#.
          - Developed an intuitive user interface to enhance player experience.

          Game Visuals:
          - Designed and implemented core gameplay mechanics using Unity and C#.
          - Developed an intuitive user interface to enhance player experience.
          `}
      />
    </div>
  );
};

export default GladiatorSiegePage;
