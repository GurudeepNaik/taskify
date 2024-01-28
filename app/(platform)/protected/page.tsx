"use client";
import { useAuth, useUser, UserButton } from "@clerk/nextjs";

const Page = () => {
  return <UserButton afterSignOutUrl="/" />;
};

export default Page;
