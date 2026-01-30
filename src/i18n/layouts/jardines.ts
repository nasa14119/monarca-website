export interface JardinesContent {
  main_section: {
    title: string;
    main_entrance: string[];
    call_to_action: string;
  };
  explain: {
    what: {
      question: string;
      text: string[];
    };
    how: {
      question: string;
      text: string[];
    };
    benefits: {
      title: string;
      points: string[];
    };
  };
}
