import GamePageContent from "../components/GamePageContent";
import ContributionList from "../components/ContributionList";

const GamePage = ({slides, title, description, role, contributions}) => {
  return (
    <div className="space-y-12 lg:space-y-16">
      <GamePageContent
        title={title}
        slides={slides}
        description={description}
      />

      <ContributionList
        role={role}
        contributions={contributions}
      />
    </div>
  );
}

export default GamePage