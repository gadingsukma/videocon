import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Videocon",
  description: "A video conferencing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          layout: {
            logoImageUrl: "/icons/videocon-logo.svg",
            socialButtonsVariant: 'iconButton',
          },
          // variables: {
          //   colorPrimary: "#0E78F9",
          //   colorText: "#FFF",
          //   colorBackground: "#1C1F2E",
          //   colorInputBackground: "#252A41",
          //   colorInputText: "#FFF",
          // },
        }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
