import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/customs/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPA 計算機",
  description: "GPA Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
        <meta name="google-site-verification" content="Ak3838t63FqFMkRncTmbaAgUn7RwayAv5nnV2eAzfwo" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
