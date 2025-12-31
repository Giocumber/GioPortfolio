import GamePageLayout from "../components/GamePageLayout";
import BulletBoi from "../assets/BulletBoi.png";
import ContributionList from "../components/ContributionList";

const BulletBoiPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Bullet Boi"}
        image={BulletBoi}
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
