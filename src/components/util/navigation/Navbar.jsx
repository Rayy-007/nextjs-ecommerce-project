import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"> Ecommerce.</Link>
      </div>
      <div className="">
        <ul className="">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div>
        <form action="">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input-bordered input"
            />
          </div>
        </form>
        <div>
          {/* Wishlist */}
          <div className="">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {/* Cart */}
          <div className=""></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
