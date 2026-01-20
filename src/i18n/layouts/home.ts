export interface Home {
  title: string;
  ilustration: {
    header: string;
    footnote: string[];
  };
  main: {
    text: string[];
    strong: string;
  };
  actions: {
    header: string;
    btns: string[];
  };
}
