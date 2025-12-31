import GamePageLayout from "../components/GamePageLayout";
import GladiatorSiege from "../assets/GladiatorSiege.png";
import ContributionList from "../components/ContributionList";

const GladiatorSiegePage = () => {
  return (
    <div className="space-y-16">
      <GamePageLayout
        title={"Gladiator Siege"}
        image={GladiatorSiege}
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
          - Implemented complete gameplay mechanics and systems, including player and orc interactions.
          - Developed game progression, including winning and losing conditions and scene transitions after each round.
          - Implemented multiplayer inputs and actions for competitive gameplay.
          - Built health systems for players and orc units.
          - Designed and developed UI/UX for smooth player interaction.
          - Note: All 2D assets were sourced online; all gameplay systems and mechanics were independently developed.
          `}
      />
    </div>
  );
};

export default GladiatorSiegePage;
