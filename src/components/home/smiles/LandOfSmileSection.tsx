import "./style.LandOfSmileSection.scss";
import { useTranslations } from "next-intl";
import Layout from "@/components/layout/Layout";
import luxury from "public/luxury.jpg";

export default function LandOfSmileSection() {
  const t = useTranslations("Home");

  return (
    <Layout
      id="smile"
      backgroundImage={luxury}
      title={t("smiles_title")}
      text={t("smiles_text")}
    >
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube-nocookie.com/embed/isMCJWZu2QE?si=vkIvgy0LkLJ9nfgp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Layout>
  );
}
