"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" bg-gray-10 lg:w-1/5 lg:h-screen lg:py-[80px] 2xl:py-[30px]  ">
      <div className=" flex flex-row lg:flex-col items-center justify-between w-full h-full ">
        <div className=" px-5 md:px-[40px] py-10 lg:px-0 lg:py-0 flex items-center justify-between w-full lg:block lg:w-1/2 ">
          <Link href="/">
            <Image
              src="/logo.svg"
              height={148}
              width={163}
              alt="logo"
              className="2xl:h-full 2xl:w-full hidden lg:block"
            />
            <Image
              src="/logo_mobile.svg"
              height={59}
              width={216}
              alt="logo"
              className="2xl:h-full 2xl:w-full lg:hidden"
            />
          </Link>

          {/* Desktop menu */}
          <div className="lg:mt-[80px] 2xl:mt-0 space-y-12  lg:block hidden ">
            <Link href="/" className="flex items-center group">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 10a.5.5 0 0 0-1 0h1zm-14 0a.5.5 0 0 0-1 0h1zm15.146 2.354a.5.5 0 0 0 .708-.708l-.708.708zM12 3l.354-.354a.5.5 0 0 0-.708 0L12 3zm-9.354 8.646a.5.5 0 1 0 .708.708l-.708-.708zM7 21.5h10v-1H7v1zM19.5 19v-9h-1v9h1zm-14 0v-9h-1v9h1zm15.854-7.354-9-9-.708.708 9 9 .708-.708zm-9.708-9-9 9 .708.708 9-9-.708-.708zM17 21.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5v1zm-10-1A1.5 1.5 0 0 1 5.5 19h-1A2.5 2.5 0 0 0 7 21.5v-1z"
                  fill="#9BA1A7"
                  className=" group-hover:fill-white transition-all duration-300 ease-in-out "
                />
              </svg>
              <p className="regular-18 2xl:text-3xl text-gray-20 ml-4 group-hover:text-white group-hover:underline transition-all duration-300 ease-in-out">
                Home
              </p>
            </Link>

            <Link href="/work" className="flex items-center group">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 8h16M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M4 8l4-4h8l4 4M8 12h4"
                  stroke="#9BA1A7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
              </svg>
              <p className="regular-18 2xl:text-3xl text-gray-20 ml-4 group-hover:text-white group-hover:underline transition-all duration-300 ease-in-out">
                Projets
              </p>
            </Link>

            <Link href="/about" className="flex items-center group">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 11h2v6h-2v-6zM11 7h2v2h-2V7z"
                  fill="#9BA1A7"
                  className=" group-hover:fill-white transition-all duration-300 ease-in-out"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  stroke="#9BA1A7"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
              </svg>
              <p className="regular-18 2xl:text-3xl text-gray-20 ml-4 group-hover:text-white group-hover:underline transition-all duration-300 ease-in-out">
                About
              </p>
            </Link>

            <Link
              href="mailto:hello@medjio.me"
              target="_blank"
              className="flex items-center group"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18.818c0-.757.4-2.273 2-2.273h6c1.827 0 2 1.364 2 2.273"
                  stroke="#9BA1A7"
                  strokeLinecap="round"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
                <path
                  d="M14.5 11.09c0 1.187-1.073 2.228-2.5 2.228s-2.5-1.04-2.5-2.227c0-1.186 1.073-2.227 2.5-2.227s2.5 1.04 2.5 2.227z"
                  stroke="#9BA1A7"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
                <rect
                  x="2.5"
                  y="5.227"
                  width="19"
                  height="16.273"
                  rx="1.5"
                  stroke="#9BA1A7"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
                <rect
                  x="7.25"
                  y="2.25"
                  width=".5"
                  height="3.136"
                  rx=".25"
                  stroke="#9BA1A7"
                  strokeWidth=".5"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
                <rect
                  x="16.25"
                  y="2.25"
                  width=".5"
                  height="3.136"
                  rx=".25"
                  stroke="#9BA1A7"
                  strokeWidth=".5"
                  className=" group-hover:stroke-white transition-all duration-300 ease-in-out"
                />
              </svg>
              <p className="regular-18 2xl:text-3xl text-gray-20 ml-4 group-hover:text-white group-hover:underline transition-all duration-300 ease-in-out">
                Contact
              </p>
            </Link>
          </div>

          {/* mobile menu */}
          <section className=" flex lg:hidden">
            <div
              className="lg:hidden space-y-2 cursor-pointer py-4"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-6 rounded bg-white"></span>
              <span className="block h-0.5 w-6 rounded bg-white"></span>
              <span className="block h-0.5 w-6 rounded bg-white"></span>
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 pt-14 md:pt-[68px] pr-4 md:pr-9 cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col gap-10 w-full">
                <Link href="/" className="medium-48 text-gray-300 uppercase ">
                  <span>Home</span>
                </Link>

                <li>
                  <Link
                    href="/work"
                    className="medium-48 text-gray-300 uppercase md:pl-0 "
                  >
                    <span>Projets</span>
                  </Link>
                </li>
                <Link
                  href="/about"
                  className="medium-48 text-gray-300 uppercase "
                >
                  <span>About</span>
                </Link>

                <Link
                  href="mailto:hello@medjio.me"
                  className="medium-48 text-gray-300 uppercase md:pl-0 "
                >
                  <span>Contact</span>
                </Link>
              </ul>
            </div>
          </section>
        </div>

        <div className="hidden w-2/5 lg:flex items-center space-x-3  ">
          <Link href="https://www.behance.net/njean" target="_blank">
            <Image
              src="/behance.svg"
              width={24}
              height={24}
              alt="Icon Behance"
              className="2xl:w-[34px] 2xl:h-[34px]"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jean-claude-nganmedjio-603995a1/"
            target="_blank"
          >
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="Icon Linkedin"
              className="2xl:w-[34px] 2xl:h-[34px]"
            />
          </Link>
          <Link
            href="https://www.instagram.com/nganmedjio_jean/"
            target="_blank"
          >
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Icon Instagram"
              className="2xl:w-[34px] 2xl:h-[34px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
