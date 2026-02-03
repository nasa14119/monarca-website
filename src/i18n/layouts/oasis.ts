export interface OasisContent {
  main_sections: {
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
    more: {
      title: string;
      text: string[];
    };
  };
  bento: {
    join: {
      title: string;
      text: string[];
    };
    contact: {
      title: string;
      call_action: string;
      text: string[];
    };
  };
}
