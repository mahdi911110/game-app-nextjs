import Header from "./Header";
import Sidebar from "./Sidebar";

export default async function MainNavbar({ user }: { user: string | null }) {
  return (
    <>
      <Sidebar />
      <Header user={user} />
    </>
  );
}
