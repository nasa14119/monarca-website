export interface About {
  hero_section: {
    title: string;
    main_content: string[];
  };
  info_section: {
    titles: {
      history: string[];
      prices: string[];
    };
    history: string[];
    prices: string[];
  };
  donate: {
    title: string;
    label: string;
    embrace: string;
  };
}
