import { SectionProp } from "@/types/type";
import "./style.HistorySection.scss";
import territory from "public/thailand-territory.png";
import Image from "next/image";

export default function HistorySection({
  backgroundImage,
  title,
  text,
}: SectionProp) {
  return (
    <section id="history">
      <Image
        src={backgroundImage}
        alt="History section background image"
        fill
        quality={100}
        style={{ objectFit: "cover", filter: "brightness(50%)", zIndex: "-1" }}
      />
      <div className="container">
        <div className="image-wrapper">
          <Image
            src={territory}
            alt="Thailand territory image"
            className="territory-image"
          />
        </div>
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
    </section>
  );
}
