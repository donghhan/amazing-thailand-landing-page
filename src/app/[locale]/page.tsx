"use client";
import { useTranslations } from "next-intl";
import buddha from "public/buddha-background.svg";
import temple from "public/thai-temple.svg";
import Header from "@/components/header/Header";
import HeroSection from "@/components/home/hero/HeroSection";
import LandOfSmileSection from "@/components/home/smiles/LandOfSmileSection";
import HistorySection from "@/components/home/history/HistorySection";
import CulturalOriginsSection from "@/components/home/culture/CulturalOriginsSection";
import LandMarkSection from "@/components/home/landmark/LandMarkSection";
import SportsSection from "@/components/home/sports/SportsSection";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <Header />
      <HeroSection />
      <LandOfSmileSection />
      <HistorySection
        backgroundImage={buddha}
        title={t("history_title")}
        text={t("history_text")}
        id="history"
      />
      <CulturalOriginsSection
        backgroundImage={temple}
        title={t("cultural_title")}
        text={t("cultural_text")}
        id="origins"
      />
      <LandMarkSection />
      <SportsSection />
    </main>
  );
}
