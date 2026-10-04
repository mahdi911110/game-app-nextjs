import { User } from "next-auth";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default async function MainNavbar({ user }: { user: User | null }) {
  return (
    <>
      <Sidebar />
      <Header user={user} />
    </>
  );
}
