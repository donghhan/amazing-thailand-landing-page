"use client";
import "@/styles/style.Dish.scss";
import { useTranslations } from "next-intl";
import HeroLayout from "@/components/layout/HeroLayout";
import hero from "public/main-dish-background.jpg";
import Image from "next/image";
import lineUpside from "public/line-upside.svg";

export default function MainDish() {
  const t = useTranslations("Main_Dish");

  return (
    <main id="main-dish">
      <HeroLayout
        backgroundImage={hero}
        title={t("hero_title")}
        text={t("hero_text")}
        id="hero"
      />
      <div id="info">
        <div className="container">
          <Image
            src={lineUpside}
            alt="line decoration"
            className="line-upside"
          />
          <div className="text-wrapper">
            <h1 className="title">{t("origins_title")}</h1>
            <p className="text">{t("origins_text")}</p>
          </div>
          <Image
            src={lineUpside}
            alt="line decoration"
            className="line-upside"
          />
        </div>
      </div>
    </main>
  );
}
