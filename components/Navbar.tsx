"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LineVertical from "./LineVertical";

const MENU_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Reservation", href: "/reservation" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="navbar" role="banner">
      <div className="grid-navbar">
        <div className="block-navbar">
          <div className="nav-block-button">
            <Link href="/contact" className="nav-button">
              Contact
            </Link>
          </div>
          <div className="nav-line">
            <div className="circle" />
            <div className="line-horizontal" />
            <div className="circle" />
          </div>
        </div>
        <Link href="/" className="brand" aria-label="Zesty - Home">
          <Image
            src="/images/logo.svg"
            alt=""
            width={105}
            height={49}
            className="logo"
            priority
          />
        </Link>
        <div className="block-navbar">
          <div className="nav-line">
            <div className="circle" />
            <div className="line-horizontal" />
            <div className="circle" />
          </div>
          <div className="nav-block-button">
            <button
              type="button"
              className="menu-button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <div className="text-menu">Menu</div>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`nav-menu ${open ? "nav-menu-open" : ""}`}
        aria-label="Main navigation"
        aria-hidden={!open}
      >
        <div className="grid-menu">
          <LineVertical variant="top" />
          <div className="menu-links">
            {MENU_LINKS.map((link) => (
              <div key={link.href} className="overflow-link">
                <Link href={link.href} className="nav-link" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <LineVertical variant="bottom" />
        </div>
        <button
          type="button"
          className="menu-button-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <div className="text-menu">Close</div>
        </button>
      </nav>
    </div>
  );
}
