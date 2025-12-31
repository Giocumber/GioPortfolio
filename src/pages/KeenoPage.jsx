import GamePageLayout from "../components/GamePageLayout";
import Keeno from "../assets/Keeno.png";
import ContributionList from "../components/ContributionList";

const KeenoPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Keeno"}
        image={Keeno}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
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
