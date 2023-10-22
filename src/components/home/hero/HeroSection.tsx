import "./style.HeroSection.scss";
import Image, { StaticImageData } from "next/image";
import line from "public/line.svg";

interface HeroSectionProp {
  backgroundImage: StaticImageData;
  title: string;
  text: string;
}

export default function HeroSection({
  backgroundImage,
  title,
  text,
}: HeroSectionProp) {
  return (
    <section id="hero">
      <Image
        className="background-image"
        src={backgroundImage}
        alt="Hero background image"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-1",
          filter: "contrast(200%) brightness(60%)",
        }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="hero-text">{text}</p>
          <button className="explore-btn">Explore Thai</button>
        </div>
        <Image src={line} alt="Line Decoration" className="line left" />
        <Image src={line} alt="Line Decoration" className="line right" />
      </div>
    </section>
  );
}
