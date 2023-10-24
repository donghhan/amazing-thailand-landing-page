"use client";
import { useTranslations } from "next-intl";
import hero from "public/home_hero.jpg";
import luxury from "public/luxury.jpg";
import buddha from "public/buddha-background.svg";
import temple from "public/thai-temple.svg";
import Header from "@/components/header/Header";
import HeroSection from "@/components/home/hero/HeroSection";
import LandOfSmileSection from "@/components/home/smiles/LandOfSmileSection";
import HistorySection from "@/components/home/history/HistorySection";
import CulturalOriginsSection from "@/components/home/culture/CulturalOriginsSection";

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
      <HistorySection
        backgroundImage={buddha}
        title={t("history_title")}
        text={t("history_text")}
      />
      <CulturalOriginsSection
        backgroundImage={temple}
        title={t("cultural_title")}
        text={t("cultural_text")}
      />
    </main>
  );
}
