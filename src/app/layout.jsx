import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/footer";
import Sidebar from "@/components/common/sidebar";
import { HeaderMobile } from "@/components/common/header-mobile";
import { HeaderWrapper } from "@/components/common/header/wrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doriana NOVO",
  description: "Doriana",
  author: "",
  icons: {
    icon: "/.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Sidebar />
        <HeaderMobile />
        <HeaderWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
