import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn, headFont } from "@/lib/utils";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700", headFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  );
};

export default Logo;
