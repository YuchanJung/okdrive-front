import { atom } from "recoil";
import { IImage } from "./api"; 

export const allImagesState = atom<IImage[]>({
    default: [
        {id: 1, url: "../Images/CE_test.jpeg", translated_caption: "dummy"},
        {id: 1, url: "../Images/test4.jpg", translated_caption: "dummy"},
        {id: 1, url: "../Images/test7.jpg", translated_caption: "dummy"},
        {id: 1, url: "../Images/test5.jpg", translated_caption: "dummy"},
        {id: 1, url: "../Images/hockey.jpg", translated_caption: "dummy"},
    ],
    key: "allImages",
})