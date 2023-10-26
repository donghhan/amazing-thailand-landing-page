import "./style.HeroSection.scss";
import { useTranslations } from "next-intl";
import hero from "public/home_hero.jpg";
import HeroLayout from "@/components/layout/HeroLayout";

export default function HeroSection() {
  const t = useTranslations("Home");

  return (
    <HeroLayout
      id="hero"
      backgroundImage={hero}
      title={t("hero_title")}
      text={t("hero_text")}
    />
  );
}
