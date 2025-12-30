import GamePageLayout from "../components/GamePageLayout";
import DontTouchMyDuck from "../assets/DontTouchMyDuck.png";
import ContributionList from "../components/ContributionList";

const DontTouchMyDuckPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Don't Touch My Duck: Crops and Quacks"}
        image={DontTouchMyDuck}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
      />

      <ContributionList
        role={"Gameplay Programmer | Animator"}
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

export default DontTouchMyDuckPage;
