"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/data/navigation";

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(3);

  return (
    <>
      <div className="relative z-50 mx-auto flex h-11 w-full max-w-[375px] items-end justify-between px-10 pb-2.5 text-[15.858px] font-semibold leading-none text-[#292929] xl:hidden">
        <span>9:41</span>
        <div className="flex w-[66px] items-center justify-end gap-[5px]" aria-hidden="true">
          <Image
            src="/assets/images/cellular.svg"
            alt=""
            width={18}
            height={12}
            className="h-[11.405px] w-[17.91px]"
          />
          <Image
            src="/assets/images/wifi.svg"
            alt=""
            width={16}
            height={12}
            className="h-[11.5px] w-[15.99px]"
          />
          <Image
            src="/assets/images/battery.svg"
            alt=""
            width={26}
            height={13}
            className="h-[12.127px] w-[25.493px]"
          />
        </div>
      </div>
      <header className="relative z-50 mx-auto mt-[21px] w-[343px] max-w-[calc(100%_-_32px)] xl:mt-10 xl:w-[1298px] xl:max-w-[1298px]">
      <nav
        aria-label="Primary"
        className="grid h-14 grid-cols-[auto_auto] items-center justify-between rounded-pill border border-white bg-ink px-2 text-white shadow-[0_6px_12px_rgba(0,0,0,0.18)] backdrop-blur-[7.5px] xl:h-[86px] xl:grid-cols-[1fr_auto_1fr] xl:px-2.5"
      >
        <ul className="hidden items-center justify-start xl:flex">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "block rounded-pill bg-accent px-10 py-5 text-xl font-semibold leading-none text-white"
                    : "block rounded-pill px-10 py-5 text-xl font-semibold leading-none text-white transition-colors hover:text-accent-soft"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#home" className="flex h-14 items-center justify-start gap-2.5 rounded-pill pl-2 pr-4 xl:h-[86px] xl:w-[307px] xl:justify-center xl:px-10">
          <Image
            src="/assets/images/logo-mark.svg"
            alt=""
            width={46}
            height={46}
            priority
            className="h-8 w-8 xl:h-[46px] xl:w-[46px]"
          />
          <Image
            src="/assets/images/logo-type.svg"
            alt="JCREA"
            width={83}
            height={20}
            priority
            className="h-auto w-[70px] xl:w-[82.5px]"
          />
        </a>

        <ul className="hidden items-center justify-end xl:flex">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-pill px-10 py-5 text-xl font-semibold leading-none text-white transition-colors hover:text-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center justify-self-end rounded-full bg-accent text-white transition-transform active:scale-95 xl:hidden"
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMenuOpen ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMenuOpen ? "top-[7px] -rotate-45" : "top-3.5"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-[72px] origin-top overflow-hidden rounded-[28px] bg-ink p-2 text-white shadow-[0_18px_35px_rgba(0,0,0,0.24)] transition-all duration-200 xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="grid gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  link.active
                    ? "block rounded-pill bg-accent px-5 py-4 text-center text-sm font-medium leading-none text-white"
                    : "block rounded-pill px-5 py-4 text-center text-sm font-medium leading-none text-white/90 transition-colors hover:bg-white/10 hover:text-accent-soft"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      </header>
    </>
  );
}
