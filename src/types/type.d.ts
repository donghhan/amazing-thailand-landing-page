import { StaticImageData } from "next/image";

interface SectionProp {
  backgroundImage: StaticImageData;
  title: string;
  text: string;
  children?: React.ReactNode;
  id: string;
}
