import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/header/MainNavbar";
import PageProvider from "@/components/providers/PageProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Next App",
  description: "This is a game next app",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <QueryProvider>
          <AppRouterCacheProvider>
            <CssBaseline />
            <MainNavbar />
            <PageProvider>
              {children}
            </PageProvider>
            <Footer />
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
