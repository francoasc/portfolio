import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiPostgresql, SiGraphql, SiMongodb } from "react-icons/si";

export const skills = [
  {
    icon: <IoLogoJavascript size="3rem" theme="#F7DF1E" className="icons" />,
    name: "JavaScript",
  },
  {
    icon: <FaNodeJs size="3rem" theme="#88C043" className="icons" />,
    name: "NodeJS",
  },
  {
    icon: <FaReact size="3rem" theme="#7BDEFD" className="icons" />,
    name: "ReactJS",
  },
  {
    icon: <SiRedux size="3rem" theme="#764ABC" className="icons" />,
    name: "Redux",
  },
  {
    icon: <SiGraphql size="3rem" theme="#E10098" className="icons" />,
    name: "GraphQL",
  },
  {
    icon: <SiPostgresql size="3rem" theme="#336791" className="icons" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiMongodb size="3rem" theme="#34A542" className="icons" />,
    name: "MongoDB",
  },
];
