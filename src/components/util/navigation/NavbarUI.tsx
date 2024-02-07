"use client";

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
              <svg
                className="hover:text-primary-500 h-6 w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn "
              onClick={() => setIsOpenNav(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
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

// !
// <nav className="bg-base-200">
//   <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
//     <div className="flex-1">
//       <Link href="/" className="btn-ghost btn text-xl normal-case">
//         <Image src={logo} width={40} height={40} alt="Flowmazon Logo" />
//         Flowmazon
//       </Link>
//     </div>
// {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
// <li><a>Item 1</a></li>
// <li>
//   <a>Parent</a>
//   <ul className="p-2">
//     <li><a>Submenu 1</a></li>
//     <li><a>Submenu 2</a></li>
//   </ul>
// </li>
// <li><a>Item 3</a></li>
// </ul> */}
//     <div className="flex-none gap-2">
//       <form action={searchProduct}>
//         <div className="form-control">
//           <input
//             name="searchQuery"
//             placeholder="Search"
//             className="input-bordered input w-full min-w-[150px] "
//           />
//         </div>
//       </form>
//       <ShoppingCartButton cart={cart} />
//       <UserMenuButton session={session} />
//     </div>
//   </div>
// </nav>
