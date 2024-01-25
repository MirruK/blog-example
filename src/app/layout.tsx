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
      <body className={"min-h-screen bg-[rgb(15,23,42)]"}>
        <NavBar paths={[{pathLabel: "Home", route: "/"}, {pathLabel: "Blog", route: "/blog"}, {pathLabel: "About", route: "/about"}]}></NavBar>
        {children}
      </body>
    </html>
  );
}
