import GamePageLayout from "../components/GamePageLayout";
import Keeno from "../assets/Keeno.png";
import ContributionList from "../components/ContributionList";

const KeenoPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Keeno"}
        image={Keeno}
        description={`A 3D casual stealth game where players control a rat sneaking in to steal 
          a single piece of cheese while the chef is distracted. 
          Timing and awareness are key, as the rat must hide the moment the 
          chef turns around face a deadly shotgun blast.`}
      />

      <ContributionList
        role={"Solo Dev | Gameplay Programmer | Game Visual Artist"}
        contributions={`
          - Solo developer responsible for all aspects of the game.
          - Modeled and animated 3D assets for both the player and enemy chef using Blender.
          - Implemented core gameplay systems and mechanics, including player movement, stealth, and enemy interactions.
          - Built detection mechanics using raycasting.
          - Implemented visual feedback, including particle effects, camera shake, and knockback.
          - Developed camera movement to ensure smooth gameplay experience.
          - Designed and built UI/UX, providing intuitive player interaction.
          `}
      />
    </div>
  );
};

export default KeenoPage;
