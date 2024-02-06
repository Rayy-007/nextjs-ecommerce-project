"use client";

import { Session } from "next-auth";
import Image from "next/image";
import ProfilePlaceholder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProsp {
  session: Session | null;
}

const UserMenuButton = ({ session }: UserMenuButtonProsp) => {
  const user = session?.user;

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        {user ? (
          <Image
            src={user?.image || ProfilePlaceholder}
            alt="Profile Image"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <div
            tabIndex={0}
            role="button"
            className="btn-ghost btn-circle avatar btn"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        )}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-sm z-30 mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign out
            </button>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserMenuButton;
