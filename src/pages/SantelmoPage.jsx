import GamePageContent from "../components/GamePageContent";
import Santelmo from "../assets/Santelmo.png";
import Ratatata from "../assets/Ratatata.png";
import Keeno from "../assets/Keeno.png"
import Giko from "../assets/Giko.png"
import ContributionList from "../components/ContributionList";

const SantelmoPage = () => {
  const slides = [
    { type: "youtube", url: "https://youtu.be/34g3vOz0oa8" },
    { type: "image", src: Santelmo },
    { type: "image", src: Ratatata },
    { type: "image", src: Keeno },
    { type: "image", src: Giko },
  ];
  
  return (
    <div className="space-y-16">
      <GamePageContent
        title={"Santelmo"}
        slides={slides}
        description={
          `An action-adventure game inspired by Bicolano culture and folklore, 
          where players take on the role of Santelmo, a glowing fire spirit that guides 
          and protects lost souls through a mystical forest. The game blends exploration, combat, 
          and environmental challenges, featuring mythological creatures drawn from local legends. 
          Through its atmosphere, mechanics, and visual style, the game aims to introduce players 
          to the rich stories and myths of the Bicol region.`
        }
      />

      <ContributionList
        role={"Project Lead | VFX Artist | Gameplay Programmer"}
        contributions={`
          - Designed and implemented core gameplay mechanics using Unity and C# including player movement, attacks, skills, health and NPC behavior.
          - Developed the game environment system, including level progression and unlockable areas.
          - Created and implemented in-game cutscenes to enhance storytelling.
          - Designed and built game environments, including layout and interactive elements.
          - Implemented environment visual effects (VFX) to enrich the game’s atmosphere.
          `}
      />
    </div>
  );
};

export default SantelmoPage;
