import GamePageLayout from "../components/GamePageLayout";
import GikoScreenshot from "../assets/GikoScreenshot.png";
import ContributionList from "../components/ContributionList";

const BulletBoiPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Bullet Boi"}
        image={GikoScreenshot}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
      />

      <ContributionList
        role={"Gameplay Programmer"}
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

export default BulletBoiPage;
