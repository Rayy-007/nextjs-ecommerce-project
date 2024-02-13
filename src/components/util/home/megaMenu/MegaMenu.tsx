import Link from "next/link";

const MegaMenu = () => {
  return (
    <>
      <ul className="menu menu-md w-full max-w-xs border-r ">
        <li>
          <details open>
            <summary>Fashion</summary>
            <ul>
              <li className="group/woman relative">
                <summary>
                  Woman's Fashion
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </summary>
                <ul className="absolute -right-2/4 hidden rounded-lg bg-base-200 p-5 group-hover/woman:block">
                  <li>
                    <Link href="/fashion/woman/shirt">Shirt Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/woman/jeans">Jeans Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/woman/pants">Pants Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/woman/shoes">Shoes Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/woman/bags">Bags Fashion</Link>
                  </li>
                </ul>
              </li>

              <li className="group/man relative">
                <summary>
                  Man's Fashion
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </summary>
                <ul className="absolute -right-2/4 hidden rounded-lg bg-base-200 p-5 group-hover/man:block">
                  <li>
                    <Link href="/fashion/man/shirt">Shirt Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/man/jeans">Jeans Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/man/pants">Pants Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/man/shoes">Shoes Fashion</Link>
                  </li>
                  <li>
                    <Link href="/fashion/man/bags">Bags Fashion</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/fashion/kids">Kids Fashion</Link>
              </li>
              <li>
                <Link href="/fashion/baby">Boy Fashion</Link>
              </li>
              <li>
                <Link href="/fashion/girls">Girl Fashion</Link>
              </li>
            </ul>
          </details>
          <details>
            <summary>Electronic</summary>
            <ul>
              <li>
                <Link href="/electronic/laptop">Laptop</Link>
              </li>
              <li>
                <details open>
                  <summary>Mobile</summary>
                  <ul>
                    <li>
                      <Link href="/electronic/mobile/iphone">iPhone</Link>
                    </li>
                    <li>
                      <Link href="/electronic/mobile/samsung">Samsung</Link>
                    </li>
                    <li>
                      <Link href="/electronic/mobile/motorola">Motorola</Link>
                    </li>
                    <li>
                      <Link href="/electronic/mobile/nokia">Nokia</Link>
                    </li>
                    <li>
                      <Link href="/electronic/mobile/huawei">Huawei</Link>
                    </li>
                    <li>
                      <Link href="/electronic/mobile/blackberry">
                        Blackberry
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/electronic/camera">Camera</Link>
              </li>
              <li>
                <Link href="/electronic/tv">TV</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/home&lifestyle">Home & Lifestyle</Link>
        </li>
        <li>
          <Link href="/furniture">Furniture</Link>
        </li>
        <li>
          <Link href="/sport">Sport & Outdoor</Link>
        </li>
        <li>
          <Link href="/travel">Travel Accessories</Link>
        </li>
        <li>
          <Link href="/health">Health & Beauty</Link>
        </li>
      </ul>
    </>
  );
};

export default MegaMenu;
