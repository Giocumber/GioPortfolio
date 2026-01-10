import Ratatata from "../assets/Ratatata.png";
import Keeno from "../assets/Keeno.png";
import Giko from "../assets/Giko.png";
import Santelmo from "../assets/Santelmo.png";
import DontTouchMyDuck from "../assets/DontTouchMyDuck.png";
import BulletBoi from "../assets/BulletBoi.png";
import GladiatorSiege from "../assets/GladiatorSiege.png";

export const games = [
  {
    title: "Santelmo (2025)",
    image: Santelmo,
    details: `An action-adventure game created for the Bicol Myth Game Jam, 
      celebrating Bicolano culture and folklore. A finalist in the competition.`,
    people: "7",
    time: "2 Weeks",
    slug: "santelmo",
    slides: [
      { type: "youtube", url: "https://youtu.be/34g3vOz0oa8" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Project Lead | VFX Artist | Gameplay Programmer",
    description: `An action-adventure game inspired by Bicolano culture and folklore, 
          where players take on the role of Santelmo, a glowing fire spirit that guides 
          and protects lost souls through a mystical forest. The game blends exploration, combat, 
          and environmental challenges, featuring mythological creatures drawn from local legends. 
          Through its atmosphere, mechanics, and visual style, the game aims to introduce players 
          to the rich stories and myths of the Bicol region.`,
    contributions: `
            - Designed and implemented core gameplay mechanics using Unity and C# including player movement, attacks, skills, health and NPC behavior.
            - Developed the game environment system, including level progression and unlockable areas.
            - Created and implemented in-game cutscenes to enhance storytelling.
            - Designed and built game environments, including layout and interactive elements.
            - Implemented environment visual effects (VFX) to enrich the game’s atmosphere.
          `,
  },

  {
    title: "Dont Touch My Duck (2025)",
    image: DontTouchMyDuck,
    details: `A tower defense–farming hybrid that promotes agricultural awareness.
      National finalist at the Globe Go Gaming Game Dev Competition.`,
    people: "5",
    time: "1 Month",
    slug: "dont-touch-my-duck",
    slides: [
      { type: "youtube", url: "https://youtu.be/5i9Lwmwk-M8" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Gameplay Programmer | Animator | VFX Artist",
    description: `A tower defense–farming hybrid where players manage crops to fuel their defenses
           against incoming threats. The game blends strategic placement, resource management, 
           and real-time combat, encouraging players to balance farming efficiency with defensive planning. 
           Through its mechanics and theme, the game highlights the importance of agriculture and sustainable 
           resource use.`,
    contributions: `
            - Implemented core gameplay mechanics, including player movement and interactions.
            - Developed duck systems, including combat, health, unique behaviors, animations, and attack VFX.
            - Created crop systems with unique behaviors, growth cycles, and interactive mechanics.
            - Added visual feedback for all interactions, including buying, selling, harvesting, and watering plants.
            - Built inventory and item systems, supporting shared interactions with unique behaviors per item.
            - Implemented shop functionality and system for player transactions.
            - Developed the grid placement system for strategic unit deployment.
            - Animated core player movements for smooth and responsive controls.
          `,
  },

  {
    title: "Ratatata (2024)",
    image: Ratatata,
    details: `A souls-like platformer where players control a rat wizard, 
      mastering precise movement and combat to survive encounters with dangerous creatures.`,
    people: "1",
    time: "1 Month",
    slug: "ratatata",
    slides: [
      { type: "youtube", url: "https://youtu.be/nuwLPjQ3DZg" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Solo Dev | 2D Artist | Gameplay Programmer | VFX Artist",
    description: `A souls-like platformer where players take on the role of a rat wizard, 
          mastering precise movement, timing, and spell-based combat to survive challenging 
          encounters with dangerous creatures. The game emphasizes skill-based gameplay, 
          deliberate pacing, and learning enemy patterns in a dark and unforgiving world.`,
    contributions: `
          - Implemented complete gameplay mechanics, including player movement, attacks, skills, and health systems.
          - Developed enemy AI, including standard enemies and a boss with phased attacks and unique behaviors.
          - Designed and implemented game feedback systems, such as camera shake, knockback, and visual feedback using particle effects.
          - Created and integrated all art assets and animations, giving the game its visual identity.
          - Implemented environment visual effects (VFX) to enhance atmosphere and gameplay.
          - Designed and built UI/UX, ensuring intuitive player interaction.
          - Designed overall visual design, maintaining a cohesive aesthetic throughout the game.
          `,
  },

  {
    title: "Keeno (2024)",
    image: Keeno,
    details: `A 3D casual stealth game where a rat sneaks in to grab one piece of cheese while the chef is busy, 
        quickly hiding when the chef turns around to avoid a deadly shotgun blast.`,
    people: "1",
    time: "1 Week",
    slug: "keeno",
    slides: [
      { type: "youtube", url: "https://youtu.be/AAN6MpDasGQ" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Solo Dev | Gameplay Programmer | Game Visual Artist",
    description: `A 3D casual stealth game where players control a rat sneaking in to steal 
          a single piece of cheese while the chef is distracted. 
          Timing and awareness are key, as the rat must hide the moment the 
          chef turns around face a deadly shotgun blast.`,
    contributions: `
          - Solo developer responsible for all aspects of the game.
          - Modeled and animated 3D assets for both the player and enemy chef using Blender.
          - Implemented core gameplay systems and mechanics, including player movement, stealth, and enemy interactions.
          - Built detection mechanics using raycasting.
          - Implemented visual feedback, including particle effects, camera shake, and knockback.
          - Developed camera movement to ensure smooth gameplay experience.
          - Designed and built UI/UX, providing intuitive player interaction.
          `,
  },

  {
    title: "Giko (2024)",
    image: Giko,
    details: `A 3D multiplayer cooperative game where two geckos must stay within range of each other while overcoming obstacles, 
        demanding precise coordination to avoid an explosive consequence.`,
    people: "1",
    time: "1 Week",
    slug: "giko",
    slides: [
      { type: "youtube", url: "https://youtu.be/qpelFi4LhQY" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Solo Dev | Gameplay Programmer | Game Visual Artist",
    description: `A 3D multiplayer cooperative game where two geckos embark on an adventure together, 
          requiring constant coordination to stay within range of each other while navigating 
          environmental obstacles. Straying too far apart triggers an explosive consequence, 
          pushing players to communicate, plan movements, and work closely as a team.`,
    contributions: `
          - Solo developer, responsible for designing and implementing all gameplay systems and mechanics.
          - Implemented range detection and game progression systems, including losing conditions and level transitions.
          - Designed levels to provide engaging player challenges.
          - Created UI/UX for smooth player interaction.
          - Note: All 3D assets were sourced from the Unity Asset Store, all gameplay systems and mechanics were developed independently.
          `,
  },

  {
    title: "Bullet Boi (2024)",
    image: BulletBoi,
    details: `A fast-paced 2D shooter where players weaponize their own flesh as bullets, 
        teleporting to each shot to aggressively reposition while battling relentless robotic enemies.`,
    people: "2",
    time: "1 Month",
    slug: "bullet-boi",
    slides: [
      { type: "youtube", url: "https://youtu.be/EeRKCVPQ_vo" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Gameplay Programmer",
    description: `A fast-paced 2D shooter built around a unique teleportation mechanic, 
          where players weaponize their own flesh as bullets and instantly warp to each shot. 
          The game emphasizes aggressive repositioning, quick decision-making, and fluid combat 
          while battling relentless robotic enemies.`,
    contributions: `
          - Implemented core gameplay mechanics, including player shooting and teleportation.
          - Developed health systems for both player and enemies.
          - Built game systems for winning, losing, and progression.
          - Implemented visual feedback to enhance gameplay, including particle effects and animations.
          - Designed and built UI/UX, ensuring smooth and intuitive player interaction.
          `,
  },

  {
    title: "Gladiator Siege (2023)",
    image: GladiatorSiege,
    details: `A multiplayer casual game where players battle against each other 
        while defending their own base from opposing forces in fast-paced combat.`,
    people: "1",
    time: "1 Week",
    slug: "gladiator-siege",
    slides: [
      { type: "youtube", url: "https://youtu.be/NxoUoae7biE" },
      { type: "image", src: Santelmo },
      { type: "image", src: Ratatata },
      { type: "image", src: Keeno },
      { type: "image", src: Giko },
    ],
    role: "Solo Dev | Gameplay Programmer",
    description: `A multiplayer casual PvP game where players compete against one another, 
          defending their own base while launching attacks on opposing forces. 
          The game emphasizes fast-paced combat, quick decision-making, 
          and strategic offense and defense.`,
    contributions: `
            - Implemented complete gameplay mechanics and systems, including player and orc interactions.
            - Developed game progression, including winning and losing conditions and scene transitions after each round.
            - Implemented multiplayer inputs and actions for competitive gameplay.
            - Built health systems for players and orc units.
            - Designed and developed UI/UX for smooth player interaction.
            - Note: All 2D assets were sourced online; all gameplay systems and mechanics were independently developed.
            `,
  },
];
