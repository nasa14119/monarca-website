export interface Home {
  hero_section: {
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
    carrousel: {
      btn: string;
      labels: string[];
    };
  };
}
