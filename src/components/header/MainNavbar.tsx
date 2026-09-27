"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainNavbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
    </>
  );
}
