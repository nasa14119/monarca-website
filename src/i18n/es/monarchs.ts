import type { MonarchsContent } from "@i18n/layouts/monarchs";

export default {
  hero: {
    title: "Mariposa Monarca",
    content: [
      "La mariposa monarca es un animal sin igual. El único insecto que cuenta con una migración, además, de esta magnitud. ",
    ],
    label: "descubre más",
  },
  characteristics: {
    title: "caracteristicas",
    boxes: {
      colors: [
        "Sus colores tan brillantes es porque los utilizan como disuasor ya que los depredadores piensan que son venenosas.",
      ],
      food: [
        "En su etapa adulta, las mariposas monarca se alimentan principalmente del néctar de diversas flores, como girasoles, lirios, cardos y margaritas.  ",
      ],
      time: [
        "Cuenta con un periodo de metamorfosis de entre 9 a 15 días. Tiene un peso aproximado de medio gramo y a lo largo de su vida pone hasta 400 huevos.",
      ],
    },
  },
  life_cycle: {
    title: "cilclo de vida",
    content: {
      egg: [
        "Tras el apareamiento, la mariposa hembra pone los huevos en el reverso de las plantas de asclepia o algodoncillo. Una vez que deposita los huevos, la monarca muere. Estos huevos tardan de 4-8 días en eclosionar.",
      ],
      larva: [
        "Cuando nacen las orugas, se comen la cáscara de su huevo y se alimentan del algodoncillo. De 1 a 2 semanas, la oruga construye su crisálida.",
      ],
      pupa: [
        "La fase de crisálida o pupa dura de 8 a 15 días. Mientras está dentro de la crisálida, la oruga se transforma hasta convertirse en mariposa.",
      ],
      butterfly: [
        "La mariposa sale de la crisálida. Las generaciones que no migran viven de 3-6 semanas y la mariposa que migra vive entre 8-9 meses. Las mariposas alcanzan su madurez sexual y se aparean.",
      ],
    },
  },
} satisfies MonarchsContent;
