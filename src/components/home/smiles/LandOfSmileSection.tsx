import { SectionProp } from "@/types/type";
import "./style.LandOfSmileSection.scss";
import Image from "next/image";

export default function LandOfSmileSection({
  backgroundImage,
  title,
  text,
}: SectionProp) {
  return (
    <section id="smile">
      <Image
        className="background-image"
        src={backgroundImage}
        alt="Hero background image"
        quality={100}
        fill
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/isMCJWZu2QE?si=vkIvgy0LkLJ9nfgp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
