"use client";
import "./style.Header.scss";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import Image from "next/image";
import logo from "public/logo.png";
import Link from "next-intl/link";

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const linkData = [
    {
      href: "/",
      text: "home",
    },
    {
      href: "/main-dish",
      text: "main dish",
    },
    {
      href: "/side-dish",
      text: "side dish",
    },
  ];

  const languageSelector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const language = event.currentTarget.getAttribute("value") as string;
    startTransition(() => {
      router.replace(pathname, { locale: language });
    });
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <Image src={logo} alt="logo" />
        </div>
        <ul className="menu">
          {linkData.map((link, index) => (
            <li key={index}>
              <Link className="link" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="language-selector">
            {locale === "en" ? (
              <button
                className="language-btn"
                onClick={languageSelector}
                value="th"
              >
                {t("locale", { locale: "th" })}
              </button>
            ) : (
              <button
                className="language-btn"
                onClick={languageSelector}
                value="en"
              >
                {t("locale", { locale: "en" })}
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
