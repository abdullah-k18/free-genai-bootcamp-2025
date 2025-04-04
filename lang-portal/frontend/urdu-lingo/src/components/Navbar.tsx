
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpenCheck, BarChart3, Book, FolderOpen, Clock, Settings } from "lucide-react";

const navItems = [
  { 
    name: "Dashboard", 
    path: "/dashboard", 
    icon: <BarChart3 className="w-5 h-5 mr-2" />
  },
  { 
    name: "Study Activities", 
    path: "/study-activities", 
    icon: <BookOpenCheck className="w-5 h-5 mr-2" /> 
  },
  { 
    name: "Words", 
    path: "/words", 
    icon: <Book className="w-5 h-5 mr-2" /> 
  },
  { 
    name: "Word Groups", 
    path: "/groups", 
    icon: <FolderOpen className="w-5 h-5 mr-2" /> 
  },
  { 
    name: "Sessions", 
    path: "/sessions", 
    icon: <Clock className="w-5 h-5 mr-2" /> 
  },
  { 
    name: "Settings", 
    path: "/settings", 
    icon: <Settings className="w-5 h-5 mr-2" /> 
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <div className="flex items-center space-x-2">
            <span className="urdu-text text-xl font-bold text-urdu-primary">اردو</span>
            <span className="font-semibold text-lg">LinguaBloom</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-1 ml-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link flex items-center",
                location.pathname === item.path || 
                (location.pathname.startsWith(item.path + "/") && item.path !== "/dashboard") 
                  ? "nav-link-active" 
                  : ""
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          {/* Mobile menu button will go here in future versions */}
          <button className="p-2">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
