import { SectionProp } from "@/types/type";
import "./style.Layout.scss";
import Image from "next/image";

export default function Layout({
  backgroundImage,
  title,
  text,
  children,
  id,
}: SectionProp) {
  return (
    <section id={id}>
      <Image
        src={backgroundImage}
        alt="background image"
        quality={100}
        fill
        style={{ zIndex: "-1", objectFit: "cover" }}
      />
      <div className="container">
        <div className="text-wrapper">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
