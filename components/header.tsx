import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="nav-link">
            Articles
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};
