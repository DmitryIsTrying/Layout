import { styled } from "styled-components";
import desertImage from "../assets/images/desert.webp";

export const Painting = styled.img.attrs(() => ({
  src: desertImage,
  alt: "Desert",
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;
