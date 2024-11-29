import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";
import CommandBar from "./_components/commandBar";

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
});

export const metadata: Metadata = {
  title: "Unedited",
  description: "Unedited official website",
  keywords: ["Unedited", "Web developer", "App developer"],
  icons: {
    icon: "https://www.simpleimageresizer.com/_uploads/photos/018e82a6/Pinterest_Image_removebg_preview_optimized.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.className}`}>
        <CommandBar />
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
