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
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">amazing thailand</h1>
        </div>
      </div>
    </section>
  );
}
