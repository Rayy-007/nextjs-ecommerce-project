("use client");

import { MenuCloseIcon } from "./MenuCloseIcon";
import { MenuIcon } from "./MenuIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavbarUIProps {
  size: string;
}

const NavbarUI = ({ size }: NavbarUIProps) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/todaydeals", label: "Today's Deals" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  useEffect(() => {
    console.log("clicked");
    // Close the navbar when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef?.current.contains(event.target as Node)) {
        setIsOpenNav(false);
      }
    };
    // Add click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {size === "desktop" ? (
        <ul className="navbar-start hidden justify-center gap-8 text-lg lg:flex">
          {links.map(({ path, label }) => (
            <li key={label}>
              <Link
                className={`link-hover ${
                  pathname === path ? "link-primary font-semibold" : ""
                }`}
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div
          ref={navRef}
          className={`dropdown-end dropdown  flex-none ${
            size === "mobile" ? "block sm:hidden" : "hidden sm:block lg:hidden"
          }`}
        >
          {isOpenNav ? (
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn"
              onClick={() => setIsOpenNav(false)}
            >
              <MenuCloseIcon />
            </div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn "
              onClick={() => setIsOpenNav(true)}
            >
              <MenuIcon />
            </div>
          )}

          <ul
            className={`dropdown-content menu rounded-box menu-sm z-[3] mt-3 w-52 bg-base-100 p-2 shadow ${
              isOpenNav ? "visible" : "hidden"
            }`}
          >
            {links.map(({ path, label }) => (
              <li key={label}>
                <Link
                  className={`link-hover ${
                    pathname === path ? "link-primary font-semibold" : ""
                  }`}
                  href={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarUI;
