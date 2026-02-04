import type { About } from "@i18n/layouts/about";

export default {
  hero_section: {
    title: "we are",
    main_content: [
      "We are a non-profit organization founded in 2000 with the goal of protecting the monarch butterfly and everything involved in its migration.",
    ],
  },

  info_section: {
    titles: {
      history: ["our", "history"],
      prices: ["recognition", "and achievements"],
    },
    history: [
      "This non-profit organization was born when a man, deeply concerned about the critical situation facing the monarch butterfly, chose to leave his former life behind to dedicate himself entirely to its conservation. After realizing that habitat loss was putting the species at risk, he began creating sanctuaries to protect the natural areas where butterflies rest and reproduce, hoping to slow their decline.",
      "Over time, he understood that these efforts were not enough, as many butterflies continued to die during migration due to lack of food, pesticide use, and the destruction of intermediate ecosystems.",
      "The organization then expanded its mission by building pollinator gardens throughout Mexico, creating green corridors that allow monarch butterflies to feed and survive during their long journey, strengthening their conservation nationwide.",
    ],
    prices: [
      "2018 Latin America Verde Award winner",
      "Ecuatorial New York finalist (2021)",
      "Mexican Senate recognition (2019)",
      "100+ gardens built",
    ],
  },
  donate: {
    title: "and the most important one is",
    label: "Let’s continue the mission",
    embrace: "you",
  },
} satisfies About;
