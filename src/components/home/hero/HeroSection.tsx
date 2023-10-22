import "./style.HeroSection.scss";
import Image from "next/image";
import hero from "public/hero.jpg";
import line from "public/line.svg";

export default function HeroSection() {
  return (
    <section id="hero">
      <Image
        className="background-image"
        src={hero}
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
          <h1 className="title">amazing thailand</h1>
          <p className="hero-text">
            Mountains, hills, plains and a lengthy coastline along the Gulf of
            Thailand make up the country of Thailand.
          </p>
          <button className="explore-btn">Explore Thai</button>
        </div>
        <Image src={line} alt="Line Decoration" className="line left" />
        <Image src={line} alt="Line Decoration" className="line right" />
      </div>
    </section>
  );
}
