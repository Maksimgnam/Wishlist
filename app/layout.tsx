import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wishlist",
<<<<<<< HEAD
  description: "Coolday",
=======
  description: "Wishlist",
>>>>>>> b10e4297e2f34971523bb7ee64cf5cfea0d37db4
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-svh flex">


        {children}
        </main>
   
        </body>
    </html>
  );
}
