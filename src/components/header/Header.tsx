"use client";
import "./style.Header.scss";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import Image from "next/image";
import logo from "public/logo.png";
import Link from "next/link";

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
  {
    href: "/beverage",
    text: "beverage",
  },
  {
    href: "/restaurant",
    text: "restaurant",
  },
];

export default function Header() {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const languageSelector = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
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
            <select
              name="language"
              id="language"
              defaultValue={locale}
              onChange={languageSelector}
            >
              {["en", "th"].map((lang) => (
                <option key={lang} value={lang}>
                  {t("locale", { locale: lang })}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}
