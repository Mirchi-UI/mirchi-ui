import type { Metadata } from "next";
import { Outfit, Poppins, Inter, Instrument_Serif, Archivo } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/lib/theme-provider";
import { RootProvider } from 'fumadocs-ui/provider/next';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});



export const metadata: Metadata = {
  title: "Mirchi UI",
  description: "Mirchi UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${archivo.variable} ${poppins.variable} ${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ViewTransitions>
            <RootProvider>{children}</RootProvider>
          </ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}

