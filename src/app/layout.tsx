import type { Metadata } from "next";
import "./globals.scss";
import './reset.scss';  
import Header from "./components/header/Header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Yeti Crab",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href='favicon.ico' />
      </Head>

      <body className="g-root g-root_theme_light">
        <Header />

        {children}
      </body>
    </html>
  );
}
