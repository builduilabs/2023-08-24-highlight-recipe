import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-800 text-white antialiased">
      {/* <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head> */}
      <body className={`flex h-full items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}
