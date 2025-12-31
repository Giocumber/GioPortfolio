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
        role={"Solo Dev | 2D Artist | Gameplay Programmer | VFX Artist"}
        contributions={`
          - Implemented complete gameplay mechanics, including player movement, attacks, skills, and health systems.
          - Developed enemy AI, including standard enemies and a boss with phased attacks and unique behaviors.
          - Designed and implemented game feedback systems, such as camera shake, knockback, and visual feedback using particle effects.
          - Created and integrated all art assets and animations, giving the game its visual identity.
          - Implemented environment visual effects (VFX) to enhance atmosphere and gameplay.
          - Designed and built UI/UX, ensuring intuitive player interaction.
          - Designed overall visual design, maintaining a cohesive aesthetic throughout the game.
          `}
      />
    </div>
  );
};

export default RatatataPage;
