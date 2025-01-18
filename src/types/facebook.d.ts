interface Window {
  FB: {
    init: (params: {
      xfbml: boolean;
      version: string;
    }) => void;
    XFBML: {
      parse: () => void;
    };
  };
  fbAsyncInit?: () => void;
}
