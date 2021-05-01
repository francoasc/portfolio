import codingBlue from "../images/coding_ blue.svg";
import codingLight from "../images/coding_normal.svg";
import codingPurple from "../images/coding_ purple.svg";
import codingGreen from "../images/coding_green.svg";

export const setImage = (theme) => {
  switch (theme) {
    case "blue":
      return codingBlue;
    case "light":
      return codingLight;
    case "purple":
      return codingPurple;
    case "green":
      return codingGreen;
    default:
      return "coding_image_missing";
  }
};
