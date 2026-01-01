import GamePageLayout from "../components/GamePageLayout";
import Giko from "../assets/Giko.png";
import ContributionList from "../components/ContributionList";

const GikoPage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Giko"}
        image={Giko}
        description={`A 3D multiplayer cooperative game where two geckos embark on an adventure together, 
          requiring constant coordination to stay within range of each other while navigating 
          environmental obstacles. Straying too far apart triggers an explosive consequence, 
          pushing players to communicate, plan movements, and work closely as a team.`}
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
