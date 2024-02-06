import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptioins } from "../api/auth/[...nextauth]/route";

const searchProduct = async (formData: FormData) => {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("search?query=" + searchQuery);
  }
};

const Navbar = async () => {
  const cart = await getCart();
  const session = await getServerSession(authOptioins);

  return (
    <nav className="bg-base-200">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex w-full flex-1  justify-between sm:w-auto  ">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} width={40} height={40} alt="Flowmazon Logo" />
            Flowmazon
          </Link>

          {/* Menu */}
          {/* Mobile */}
          <div className="dropdown-end dropdown block flex-none  sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn "
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
            <ul className="dropdown-content menu rounded-box menu-sm z-[3] mt-3 w-52 bg-base-100 p-2 shadow">
              <li>
                <Link className="link-hover link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/singup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu */}
        {/* Desktop */}
        <ul className="navbar-start menu hidden flex-row lg:flex">
          <li>
            <Link className="link-hover link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/singup">Signup</Link>
          </li>
        </ul>

        <div className="flex-none gap-2">
          <form action={searchProduct}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input-bordered input w-full min-w-[150px] "
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
          {/* Menu */}
          {/* Tablet */}
          <div className="dropdown-end dropdown hidden flex-none md:block   lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost btn-circle btn "
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
            <ul className="dropdown-content menu rounded-box menu-sm z-[3] mt-3 w-52 bg-base-100 p-2 shadow ">
              <li>
                <Link className="link-hover link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/singup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
