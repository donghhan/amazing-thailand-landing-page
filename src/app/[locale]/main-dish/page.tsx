"use client";
import "@/styles/style.Dish.scss";
import { useTranslations } from "next-intl";
import Link from "next/link";
import HeroLayout from "@/components/layout/HeroLayout";
import hero from "public/main-dish-background.jpg";
import { ui, food, ingredients } from "./image";
import Image from "next/image";
import blueBg from "public/blue-background.png";
import lineUpside from "public/line-upside.svg";

export default function MainDish() {
  const t = useTranslations("Main_Dish");

  const ingredientsData = [
    { src: ingredients.chillies, title: t("thai_chillies") },
    { src: ingredients.coconut, title: t("coconut_milk") },
    { src: ingredients.ginger, title: t("ginger") },
    { src: ingredients.lime, title: t("kiffir_lime") },
    { src: ingredients.galangal, title: t("galangal") },
    { src: ingredients.lemongrass, title: t("lemongrass") },
  ];

  const foodData = [
    {
      src: food.padThai,
      title: t("pad_thai_title"),
      text: t("pad_thai_text"),
      href: "https://hot-thai-kitchen.com/best-pad-thai/",
    },
    {
      src: food.khaoKhlukKapi,
      title: t("khao_khluk_kapi_title"),
      text: t("khao_khluk_kapi_text"),
      href: "https://hot-thai-kitchen.com/shrimp-paste-fried-rice/",
    },
    {
      src: food.pineappleFriedrice,
      title: t("pineapple_fried_rice_title"),
      text: t("pineapple_fried_rice_text"),
      href: "https://hot-thai-kitchen.com/pineapple-fried-rice/",
    },
    {
      src: food.thaiGreenChickenCurry,
      title: t("green_curry_title"),
      text: t("green_curry_text"),
      href: "https://hot-thai-kitchen.com/green-curry-new-2/",
    },
    {
      src: food.tomYamGoong,
      title: t("tom_yam_goong_title"),
      text: t("tom_yam_goong_text"),
      href: "https://hot-thai-kitchen.com/tom-yum-goong/",
    },
  ];

  return (
    <main id="main-dish">
      <HeroLayout
        backgroundImage={hero}
        title={t("hero_title")}
        text={t("hero_text")}
        id="hero"
      />
      <section id="info">
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
      </section>
      <section id="ingredients">
        <Image
          src={ui.pinkBg}
          alt="background image"
          fill
          quality={100}
          style={{
            zIndex: "-1",
            objectFit: "cover",
            filter: "hue-rotate(310deg)",
          }}
        />
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">{t("ingredients_title")}</h1>
            <p className="text">{t("ingredients_text")}</p>
          </div>
          <div className="image-wrapper">
            {ingredientsData.map((element, index) => (
              <div className="card" key={index}>
                <Image
                  src={element.src}
                  alt="ingredients image"
                  quality={100}
                  style={{
                    objectFit: "cover",
                    width: "80%",
                    height: "80%",
                  }}
                  className="image"
                />
                <h2 className="ingredient-name">{element.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="food">
        <Image
          src={blueBg}
          alt="background image"
          quality={100}
          fill
          style={{
            zIndex: "-1",
            objectFit: "cover",
            filter: "hue-rotate(40deg)",
          }}
        />
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">{t("popular_title")}</h1>
            <p className="text">{t("popular_text")}</p>
          </div>
          <div className="card-wrapper">
            {foodData.map((food, index) => (
              <div className="card" key={index}>
                <div className="image-wrapper">
                  <Image
                    src={food.src}
                    alt="food thumbnail"
                    className="food-thumbnail"
                    quality={100}
                  />
                </div>
                <div className="info-wrapper">
                  <h2 className="food-title">{food.title}</h2>
                  <p className="food-text">{food.text}</p>
                  <Link className="cook-btn" href={food.href}>
                    Cook it
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
