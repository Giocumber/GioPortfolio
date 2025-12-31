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
        role={"Gameplay Programmer | Animator | VFX Artist"}
        contributions={`
          - Implemented core gameplay mechanics, including player movement and interactions.
          - Developed duck systems, including combat, health, unique behaviors, animations, and attack VFX.
          - Created crop systems with unique behaviors, growth cycles, and interactive mechanics.
          - Added visual feedback for all interactions, including buying, selling, harvesting, and watering plants.
          - Built inventory and item systems, supporting shared interactions with unique behaviors per item.
          - Implemented shop functionality and system for player transactions.
          - Developed the grid placement system for strategic unit deployment.
          - Animated core player movements for smooth and responsive controls.
          `}
      />
    </div>
  );
};

export default DontTouchMyDuckPage;
