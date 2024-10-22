import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Blog app",
  description: "Next js blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen"}>
        <NavBar paths={[{ pathLabel: "Home", route: "/" }]}></NavBar>
        {children}
      </body>
    </html>
  );
}
