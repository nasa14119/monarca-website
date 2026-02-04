export interface MonarchsContent {
  hero: {
    title: string;
    content: string[];
    label: string;
  };
  characteristics: {
    title: string;
    boxes: {
      colors: string[];
      food: string[];
      time: string[];
    };
  };
  life_cycle: {
    title: string;
    content: {
      egg: string[];
      larva: string[];
      pupa: string[];
      butterfly: string[];
    };
  };
}
