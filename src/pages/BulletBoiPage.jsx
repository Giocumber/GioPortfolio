import GamePageContent from "../components/GamePageContent";
import BulletBoi from "../assets/BulletBoi.png";
import ContributionList from "../components/ContributionList";

const BulletBoiPage = () => {
  return (
    <div className="space-y-16">
      <GamePageContent
        title={"Bullet Boi"}
        image={BulletBoi}
        description={`A fast-paced 2D shooter built around a unique teleportation mechanic, 
          where players weaponize their own flesh as bullets and instantly warp to each shot. 
          The game emphasizes aggressive repositioning, quick decision-making, and fluid combat 
          while battling relentless robotic enemies.`}
      />

      <ContributionList
        role={"Gameplay Programmer"}
        contributions={`
          - Implemented core gameplay mechanics, including player shooting and teleportation.
          - Developed health systems for both player and enemies.
          - Built game systems for winning, losing, and progression.
          - Implemented visual feedback to enhance gameplay, including particle effects and animations.
          - Designed and built UI/UX, ensuring smooth and intuitive player interaction.
          `}
      />
    </div>
  );
};

export default BulletBoiPage;
