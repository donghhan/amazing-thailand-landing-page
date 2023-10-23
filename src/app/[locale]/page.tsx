"use client";
import { useTranslations } from "next-intl";
import hero from "public/home_hero.jpg";
import luxury from "public/luxury.jpg";
import Header from "@/components/header/Header";
import HeroSection from "@/components/home/hero/HeroSection";
import LandOfSmileSection from "@/components/home/smiles/LandOfSmileSection";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <Header />
      <HeroSection
        backgroundImage={hero}
        title={t("hero_title")}
        text={t("hero_text")}
      />
      <LandOfSmileSection
        backgroundImage={luxury}
        title={t("smiles_title")}
        text={t("smiles_text")}
      />
    </main>
  );
}
