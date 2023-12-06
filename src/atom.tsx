import { atom } from "recoil";
import { IImage } from "./api";

export const allImagesState = atom<IImage[]>({
  default: [
    {
      id: 1,
      image: "Images/CE_test.jpeg",
      caption: "dummy",
      translated_caption: "dummy",
      created_at: "",
    },
    {
      id: 1,
      image: "Images/test4.jpg",
      caption: "dummy",
      translated_caption: "dummy",
      created_at: "",
    },
    {
      id: 1,
      image: "Images/test7.jpg",
      caption: "dummy",
      translated_caption: "dummy",
      created_at: "",
    },
    {
      id: 1,
      image: "Images/test5.jpg",
      caption: "dummy",
      translated_caption: "dummy",
      created_at: "",
    },
    {
      id: 1,
      image: "Images/hockey.jpg",
      caption: "dummy",
      translated_caption: "dummy",
      created_at: "",
    },
  ],
  key: "allImages",
});
