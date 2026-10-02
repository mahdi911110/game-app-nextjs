import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/header/MainNavbar";
import PageProvider from "@/components/providers/PageProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MuiTheme from "./MuiTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Game Next",
    template: "%s | Game Next",
  },
  description: "Explore and discover games with Game Next.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <QueryProvider>
          <AppRouterCacheProvider>
            <MuiTheme>
              <CssBaseline />
              <MainNavbar />
              <PageProvider>
                {children}
              </PageProvider>
              <Footer />
            </MuiTheme>
          </AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
