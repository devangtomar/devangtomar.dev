import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}