import "./style.SportsSection.scss";
import luxury from "public/luxury.jpg";
import Image from "next/image";
import muaythai from "public/muay-thai.jpg";
import longboat from "public/long-boat-race.jpeg";
import { useTranslations } from "next-intl";
import Layout from "@/components/layout/Layout";
import kite from "public/kite.jpeg";

export default function SportsSection() {
  const t = useTranslations("Home");

  const sportsData = [
    {
      src: muaythai,
      title: t("sports_muaythai_title"),
      text: t("sports_muaythai_text"),
    },
    {
      src: longboat,
      title: t("sports_longboat_title"),
      text: t("sports_longboat_text"),
    },
    {
      src: kite,
      title: t("sports_kites_title"),
      text: t("sports_kites_text"),
    },
  ];

  return (
    <Layout
      id="sports"
      backgroundImage={luxury}
      title={t("sports_title")}
      text={t("sports_text")}
    >
      <div className="image-wrapper">
        {sportsData.map((data, index) => (
          <div className="card" key={index}>
            <Image
              src={data.src}
              alt="Sports thumbnail image"
              style={{ objectFit: "cover" }}
            />
            <div className="info-wrapper">
              <h2 className="title">{data.title}</h2>
              <p className="explanation">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
