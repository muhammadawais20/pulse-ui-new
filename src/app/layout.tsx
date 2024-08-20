import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@lib/registry";
import { AppProvider } from "@context/AppContext";
import StyledContext from "@context/StyledContext";
import "../style.scss";

import "../__server__";

export const runtime = 'edge';

const montserrat = Montserrat({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated with create app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />

        <link rel="icon" href="/favicon.ico" sizes="32x32"></link>
        <link rel="icon" href="/armada.svg" type="image/svg+xml"></link>
        <link rel="apple-touch-icon" href="/armada-180.png"></link>
        <link rel="manifest" href="/manifest.webmanifest"></link>


        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Suncoast.systems Dev project"
        />
        <link rel="manifest" href="/manifest.json" ></link>

        <title>Armada</title>
      </head>


      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8MHBD6Z0FG"></script>

      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

      </body>
    </html>
  );
}
