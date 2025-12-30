import GamePageLayout from "../components/GamePageLayout";
import Ratatata from "../assets/Ratatata.png";
import ContributionList from "../components/ContributionList";

const RatatataPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Ratatata"}
        image={Ratatata}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
      />

      <ContributionList
        role={"Solo Dev | 2D Artist | Gameplay Programmer"}
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

export default RatatataPage;
