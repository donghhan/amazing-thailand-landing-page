"use client";
import { useTranslations } from "next-intl";
import hero from "public/home_hero.jpg";
import Header from "@/components/header/Header";
import HeroSection from "@/components/home/hero/HeroSection";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <Header />
      <HeroSection backgroundImage={hero} title={t("title")} text={t("text")} />
    </main>
  );
}
