import { workSans } from "@/app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Devlog - unedited",
    description: "Unedited devlog",
    keywords: ["Unedited", "Web developer", "App developer"],
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className={`${workSans.className}`}>
          <main className="p-6">{children}</main>
        </body>
      </html>
    );
  }