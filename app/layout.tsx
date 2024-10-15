import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/**
 * 
 * Importing Custom font from next/font/google
 * 
 * By importing fonts from next/font, helps us to optimize fonts and faster download process 
 * 
 *  */
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  // while the font gets downloaded they shows fallback font and once the download finished the
  // specified font is displayed  by providing swap below
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "Demo App",
   description: "Lets build a fully operational front end design in 24 hours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${poppins.variable} antialiased`}
      >
        {/* Custom Navbar created in layout page so that it can be view in all pages  */}
        {/* We can add more components here for it to be viewed all over the pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
