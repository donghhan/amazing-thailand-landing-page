import { SectionProp } from "@/types/type";
import "./style.CulturalOriginsSection.scss";
import elephant from "public/elephant.png";
import Image from "next/image";

export default function CulturalOriginsSection({
  backgroundImage,
  title,
  text,
}: SectionProp) {
  return (
    <section id="cultural">
      <Image
        src={backgroundImage}
        alt="Cultural Origins section thumbnail image"
        className="section-background"
        quality={100}
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          filter: "grayscale(.3) brightness(.2)",
          zIndex: "-1",
        }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
      <div className="image-wrapper">
        <Image
          src={elephant}
          alt="Elephant"
          className="side-image"
          quality={100}
          style={{ filter: "brightness(.7)" }}
        />
      </div>
    </section>
  );
}
