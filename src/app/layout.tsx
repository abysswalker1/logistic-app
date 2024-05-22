import type { Metadata } from "next";
import "./globals.scss";
import './reset.scss';  
import Header from "./components/header/Header";
import Head from "next/head";
import '@gravity-ui/react/dist/index.css';

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
        <link rel="shortcut icon" href='/public/favicon.ico' />
      </Head>

      <body className="g-root">
        <Header />

        {children}
      </body>
    </html>
  );
}
