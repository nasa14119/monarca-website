export interface Shrines {
  header: {
    title: string;
    subtitle: string;
    description: string[];
  };
  main: {
    visit: string;
    descriptors: {
      location: string;
      web: string;
    };
  };
  more: {
    titile: string;
    description: string;
  };
}
