import "./style.LandMarkSection.scss";
import phuket from "public/phuket.jpg";
import railay from "public/railay-beach.jpg";
import rooftop from "public/rooftop-bar.jpg";
import sandstone from "public/sandstone-cove.jpg";
import watpho from "public/wat-pho-temple.jpg";
import doi from "public/doi-inthanon.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import luxury2 from "public/luxury2.jpg";
import Layout from "@/components/layout/Layout";

const imageData = [phuket, railay, rooftop, sandstone, watpho, doi];

export default function LandMarkSection() {
  const t = useTranslations("Home");

  return (
    <Layout
      id="landmarks"
      backgroundImage={luxury2}
      title={t("landmark_title")}
      text={t("landmark_text")}
    >
      <div className="image-wrapper">
        {imageData.map((image, index) => (
          <div className="card" key={index}>
            <Image
              src={image}
              alt="travel picture"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
