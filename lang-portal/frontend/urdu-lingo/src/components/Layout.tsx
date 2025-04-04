
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-6 md:py-10">
        <Outlet />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:h-16 md:flex-row items-center md:justify-between space-y-4 md:space-y-0 text-sm">
          <div className="flex items-center gap-2">
            <span className="urdu-text text-lg">اردو</span>
            <span>LinguaBloom</span>
            <span className="text-muted-foreground">© 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
