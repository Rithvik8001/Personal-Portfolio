import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import EmojiWrapper from "@/components/wrappers/emoji-wrapper";
import OpacityTransitionWrapper from "@/components/ui/opacity-transition-wrapper";
import LenisWrapper from "@/components/ui/lenis-wrapper";
import LoaderWrapper from "@/components/loader-wrapper/loader-wrapper";

export const metadata: Metadata = {
  title: "Rithvik's Portfolio",
  description: "",
};

const inter = Inter_Tight({ subsets: ["latin"] });
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistMono.variable} antialiased relative overflow-x-hidden`}
      >
        <LoaderWrapper>
          <EmojiWrapper>
            <LenisWrapper>
              <Nav />
              <OpacityTransitionWrapper>{children}</OpacityTransitionWrapper>
            </LenisWrapper>
          </EmojiWrapper>
        </LoaderWrapper>
      </body>
    </html>
  );
}
