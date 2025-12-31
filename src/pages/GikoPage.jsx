import GamePageLayout from "../components/GamePageLayout";
import Giko from "../assets/Giko.png";
import ContributionList from "../components/ContributionList";

const GikoPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Giko"}
        image={Giko}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. 
          Sed vel gravida ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed venenatis ex magna, ac maximus mauris porttitor nec. Sed vel gravida ligula. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ex magna, 
          ac maximus mauris porttitor nec. Sed vel gravida ligula.`}
      />

      <ContributionList
        role={"Solo Dev | Gameplay Programmer"}
        contributions={`
          - Solo developer, responsible for designing and implementing all gameplay systems and mechanics.
          - Implemented range detection and game progression systems, including losing conditions and level transitions.
          - Designed levels to provide engaging player challenges.
          - Created UI/UX for smooth player interaction.
          - Note: All 3D assets were sourced from the Unity Asset Store, all gameplay systems and mechanics were developed independently.
          `}
      />
    </div>
  );
};

export default GikoPage;
