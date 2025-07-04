import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  {
    /* Header */
  }
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-orange-500">
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={150} width={150} />
          </Link>
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/explore"
          className="text-white hover:text-orange-500 transition-colors"
        >
          Explore
        </Link>
        <Link
          href="/create"
          className="text-white hover:text-orange-500 transition-colors"
        >
          Upload +
        </Link>
        <Link
          href="/detection"
          className="text-white hover:text-orange-500 transition-colors"
        >
          Detect Art
        </Link>
        <Link
          href="/login"
          className="text-white hover:text-orange-500 transition-colors"
        >
          Account
        </Link>
        {/* <a href="#" className="text-white hover:text-orange-500 transition-colors">
            Activity
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            Create
          </a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">
            Blog
          </a> */}
        <Link href="/wallet">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
            Connect Wallet
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
