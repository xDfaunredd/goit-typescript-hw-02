export type Data = {
  id: string;
  urls: {
    full: string;
    small: string;
  };
  alt_description: string;
};

export type Response = {
  total: number;
  total_pages: number;
  results: Array<Data>;
};
