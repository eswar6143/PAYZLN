import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import "@/styles/globals.scss";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
