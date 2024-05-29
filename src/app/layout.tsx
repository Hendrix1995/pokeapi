import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "@/resource/css/globals.css";
import TitleSection from "@/component/view/home/componet/home-title-section";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: { template: "PokéAPi | %s", default: "PokéAPi" },
  description: "Hello, This is PokéAPi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={vt323.className}>{children}</body>
    </html>
  );
}
