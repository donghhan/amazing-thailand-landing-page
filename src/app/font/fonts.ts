import { PT_Sans, ZCOOL_XiaoWei } from "next/font/google";
import localFont from "next/font/local";

// export const zcoolXiaoWei = localFont({ src: "./ZCOOLXiaoWei-Regular.ttf" });

export const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const zcoolXiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
