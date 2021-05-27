import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiPostgresql,
  SiGraphql,
  SiMongodb,
  SiStyledComponents,
} from "react-icons/si";

export const skills = [
  {
    icon: <IoLogoJavascript size="5rem" className="icons" />,
    name: "JavaScript",
    theme: "#F7DF1E",
  },
  {
    icon: <FaNodeJs size="5rem" className="icons" />,
    name: "NodeJS",
    theme: "#88C043",
  },
  {
    icon: <FaReact size="5rem" className="icons" />,
    name: "ReactJS",
    theme: "#7BDEFD",
  },
  {
    icon: <SiRedux size="5rem" className="icons" />,
    name: "Redux",
    theme: "#764ABC",
  },
  {
    icon: <SiGraphql size="5rem" className="icons" />,
    name: "GraphQL",
    theme: "#E10098",
  },
  {
    icon: <SiPostgresql size="5rem" className="icons" />,
    name: "PostgreSQL",
    theme: "#336791",
  },
  {
    icon: <SiMongodb size="5rem" className="icons" />,
    name: "MongoDB",
    theme: "#34A542",
  },
  {
    icon: <SiStyledComponents size="5rem" className="icons" />,
    name: "Styled-Components",
    theme: "#F7CA4C",
  },
];

export const themeDots = [
  { theme: "light", color: "#f7fafc" },
  { theme: "blue", color: "#0d1926" },
  { theme: "purple", color: "#46344e" },
  { theme: "green", color: "#606b56" },
];
