import "./style.HeroLayout.scss";
import { SectionProp } from "@/types/type";
import Header from "../header/Header";
import line from "public/line.svg";
import Link from "next/link";
import Image from "next/image";

export default function HeroLayout({
  backgroundImage,
  title,
  text,
}: SectionProp) {
  return (
    <section id="hero">
      <Header />
      <Image
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
          <Link href="#second" className="explore-btn">
            Explore Thai
          </Link>
        </div>
        <Image src={line} alt="Line Decoration" className="line left" />
        <Image src={line} alt="Line Decoration" className="line right" />
      </div>
    </section>
  );
}
