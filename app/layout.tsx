import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import '../public/assets/css/responsive.css'
import Script from "next/script";
import BootstrapClient from "./components/bootstrap/bootstrap";
import SessionWrapper from "@/components/SessionWrapper";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Coin Bazar",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className="body">
        <Toaster position="top-center" />

        
          <Header />
          
          {children}
          <Footer />
          <Script src="/assets/js/jquery-3.6.4.min.js"></Script>
          <BootstrapClient/>
          </body>
      </html>
    </SessionWrapper>
  );
}
