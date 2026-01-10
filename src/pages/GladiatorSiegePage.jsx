import GamePageContent from "../components/GamePageContent";
import GladiatorSiege from "../assets/GladiatorSiege.png";
import ContributionList from "../components/ContributionList";

const GladiatorSiegePage = () => {
  return (
    <div className="space-y-16">
      <GamePageContent
        title={"Gladiator Siege"}
        image={GladiatorSiege}
        description={`A multiplayer casual PvP game where players compete against one another, 
          defending their own base while launching attacks on opposing forces. 
          The game emphasizes fast-paced combat, quick decision-making, 
          and strategic offense and defense.`}
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
