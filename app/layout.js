import { Inter } from "next/font/google";
import "./globals.css";
import {ChakraProvider} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo",
  description: "Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <ChakraProvider>
      <body className={inter.className}>{children}</body>
    </ChakraProvider>
    </html>
  );
}
