import type { MonarchsContent } from "@i18n/layouts/monarchs";

export default {
  hero: {
    title: "Monarch Butterfly",
    content: [
      "The monarch butterfly is a truly unique animal. It is the only insect that carries out a migration of this magnitude.",
    ],
    label: "discover more",
  },
  characteristics: {
    title: "characteristics",
    boxes: {
      colors: [
        "Their bright colors are used as a deterrent, since predators believe they are poisonous.",
      ],
      food: [
        "In their adult stage, monarch butterflies feed mainly on the nectar of various flowers, such as sunflowers, lilies, thistles, and daisies.",
      ],
      time: [
        "They have a metamorphosis period of between 9 and 15 days. Monarchs can lay up to 400 eggs throughout their lifetime.",
      ],
    },
  },
  life_cycle: {
    title: "life cycle",
    content: {
      egg: [
        "After mating, the female butterfly lays her eggs on the underside of milkweed plants. Once she lays the eggs, the monarch dies. These eggs take 4–8 days to hatch.",
      ],
      larva: [
        "When the caterpillars are born, they eat their eggshell and feed on milkweed. After 1 to 2 weeks, the caterpillar forms its chrysalis.",
      ],
      pupa: [
        "The chrysalis or pupa stage lasts from 8 to 15 days. While inside the chrysalis, the caterpillar transforms into a butterfly.",
      ],
      butterfly: [
        "The butterfly emerges from the chrysalis. Non-migratory generations live 3–6 weeks, while migrating butterflies live between 8–9 months. Butterflies reach sexual maturity and mate.",
      ],
    },
  },
} satisfies MonarchsContent;
