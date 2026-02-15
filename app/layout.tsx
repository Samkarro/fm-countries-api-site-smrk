import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./(common)/providers";
import Header from "./(common)/(components)/header";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "Solved by Samkarro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
