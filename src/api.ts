import axios from "axios";

export interface IImage {
  id: number;
  url: string;
  translated_caption: string | null;
}

export function getImages() {
  return axios.get("/api/images/").then((response) => {
    return response.data;
  });
}
