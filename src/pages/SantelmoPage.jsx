import GamePageLayout from "../components/GamePageLayout";
import Santelmo from "../assets/Santelmo.png";
import ContributionList from "../components/ContributionList";

const SantelmoPage = () => {
  return (
    <div className="space-y-16">

      <GamePageLayout
        title={"Santelmo"}
        image={Santelmo}
        description={
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`
        }
      />

      <ContributionList
        role={"Project Lead | VFX Artist | Gameplay Programmer"}
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

export default SantelmoPage;
