import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/header/MainNavbar";
import PageProvider from "@/components/providers/PageProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/user";

export const metadata: Metadata = {
  title: {
    default: "Game Next",
    template: "%s | Game Next",
  },
  description: "Explore and discover games with Game Next.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const user = await getCurrentUser();
  return (
    <QueryProvider>
      <MainNavbar user={user?.id ? user.id : null} />
      <PageProvider>
          {children}
      </PageProvider>
      <Footer />
    </QueryProvider>
  );
}
