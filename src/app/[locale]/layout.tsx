import "../../styles/global.scss";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { charmonman, prompt } from "../font/fonts";

export const metadata: Metadata = {
  title: "Amazing Thailand",
  description: "Website for introducing amazing Thailand",
};

interface LocaleLayoutProp {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProp) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error: any) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${charmonman.className} ${prompt.className}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${charmonman.className} ${prompt.className}`}>
//       <body>{children}</body>
//     </html>
//   );
// }
