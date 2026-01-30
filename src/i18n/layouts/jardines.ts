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
  pricing: {
    title: string;
    help: {
      title: string;
      body: string[];
    };
    help_someone: {
      title: string;
      body: string[];
      call_action: string;
    };
    get_own: {
      title: string;
      body: string[];
    };
    pricing: {
      title: string;
      body: string[];
    };
    call_action: {
      text: string;
      btn: string;
    };
  };
}
