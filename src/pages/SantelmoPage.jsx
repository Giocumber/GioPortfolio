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
          - Designed and implemented core gameplay mechanics using Unity and C# including player movement, attacks, skills, health and NPC behavior.
          - Developed the game environment system, including level progression and unlockable areas.
          - Created and implemented in-game cutscenes to enhance storytelling.
          - Designed and built game environments, including layout and interactive elements.
          - Implemented environment visual effects (VFX) to enrich the game’s atmosphere.
          `}
      />
    </div>
  );
};

export default SantelmoPage;
