import axios, { AxiosResponse } from "axios";
import { Response } from "../types/types";

const API_KEY: string = "CAftz2JgwT_q1UBO6KMjgwOTvS66qJk9oaV9Nj4H-nY";

const galleryAPI = axios.create({
  baseURL: "https://api.unsplash.com/",
});

export const fetchFunc = async (
  query: string,
  page: number
): Promise<Response> => {
  const { data }: AxiosResponse<Response> = await galleryAPI.get(
    "search/photos",
    {
      params: {
        client_id: API_KEY,
        query,
        per_page: 16,
        page,
      },
    }
  );

  return data;
};
