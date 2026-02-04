import type { Home } from "@i18n/layouts/home";

export default {
  hero_section: {
    title: "Monarch Rute",
    ilustration: {
      header: "12 million monarchs migrate yearly",
      footnote: ["The", "don't get to mexico"],
    },
    main: {
      strong: "help",
      text: [
        "This is because the natural habitat of butterflies is being threatened by many factors. Without refuges, their journey has no destination.",
        "But there are many ways in which we can",
      ],
    },
    actions: {
      header: "help us",
      btns: ["donate", "as business", "as person"],
    },
    carrousel: {
      btn: "More information",
      labels: ["Monarchs", "Shrines", "About us"],
    },
  },
  proyect_section: {
    info_label: "see more",
    subtitle: "projects",
    cards: [
      {
        content_header: "Agroecological Gardens",
        title: "more impact",
        content: [
          "We focus on the functional creation of gardens. In these gardens, some plants are for human consumption and others for pollinators.",
          "There are many benefits to this model. One of them is by helping pollinators (with special emphasis on monarchs), in where a a symbiotic relationship is created in which everyone thrives.",
        ],
      },
      {
        content_header: "Monarch Oasis",
        title: "in the city",
        content: [
          "We create urban gardens that transform gray spaces into vibrant oases full of life and color. These green areas not only beautify the city, but also provide refuge for monarchs and well-being for people, integrating nature and design into daily life.",
        ],
      },
    ],
  },
  relevance_section: {
    title: "relevance",
    btn: "continue",
    content: [
      "The monarch butterfly faces urgent threats that put its migration and survival at risk. Discover why protecting the Monarch Route matters—not just for butterflies, but for the health of entire ecosystems.",
    ],
  },
  visit_section: {
    title: "visit",
    lable: "our shrines",
    call_action: "locations",
  },
} satisfies Home;
