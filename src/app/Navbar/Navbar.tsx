import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptioins } from "../api/auth/[...nextauth]/route";
import NavbarUI from "@/components/util/navigation/NavbarUI";

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
    <nav className="bg-base-200 py-5">
      <div className="navbar m-auto  max-w-7xl flex-col justify-between gap-2 sm:flex-row">
        <div className="flex w-full flex-1  justify-between sm:w-auto  ">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} width={40} height={40} alt="Flowmazon Logo" />
            Flowmazon
          </Link>
          {/* Navbar - Mobile */}
          <NavbarUI size="mobile" />
        </div>

        {/* Navbar - Desktop */}
        <NavbarUI size="desktop" />

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
          {/* Navbar - Tablet */}
          <NavbarUI size="tablet" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
