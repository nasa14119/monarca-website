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
  proyect_section: {
    info_label: string;
    subtitle: string;
    cards: {
      title: string;
      content_header: string;
      content: string[];
    }[];
  };
  relevance_section: {
    title: string;
    btn: string;
    content: string[];
  };
  visit_section: {
    title: string;
    lable: string;
    call_action: string;
  };
}
