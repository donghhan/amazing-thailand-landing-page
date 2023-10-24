import { SectionProp } from "@/types/type";
import "./style.LandMarkSection.scss";
import phuket from "public/phuket.jpg";
import railay from "public/railay-beach.jpg";
import rooftop from "public/rooftop-bar.jpg";
import sandstone from "public/sandstone-cove.jpg";
import watpho from "public/wat-pho-temple.jpg";
import doi from "public/doi-inthanon.jpg";
import Image from "next/image";

const imageData = [phuket, railay, rooftop, sandstone, watpho, doi];

export default function LandMarkSection({
  backgroundImage,
  title,
  text,
}: SectionProp) {
  return (
    <section id="landmark">
      <Image
        src={backgroundImage}
        quality={100}
        alt="Background Image"
        fill
        style={{
          objectFit: "cover",
          filter: "hue-rotate(290deg) saturate(.9) opacity(.9)",
          zIndex: "-1",
        }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
        <div className="image-wrapper">
          {imageData.map((image, index) => (
            <div className="card" key={index}>
              <Image
                src={image}
                alt="travel picture"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
