import "../styles/global.scss";
import type { Metadata } from "next";
import { charmonman, prompt } from "./font/fonts";

export const metadata: Metadata = {
  title: "Amazing Thailand",
  description: "Website for introducing amazing Thailand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${charmonman.className} ${prompt.className}`}>
      <body>{children}</body>
    </html>
  );
}
