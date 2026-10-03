import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/header/MainNavbar";
import PageProvider from "@/components/providers/PageProvider";
import { getCurrentUser } from "@/lib/user";
import { redirect } from "next/navigation";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  }
  return (
    <>
      <MainNavbar user={user.id ? user.id : null} />
      <PageProvider>
        {children}
      </PageProvider>
      <Footer />
    </>
  );
}