import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({ className = "" }: { className?: string }) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = (onNavigate?: () => void) =>
    navItems.map((item) => (
      <li key={item.href}>
        <Link
          to={item.href}
          onClick={onNavigate}
          aria-current={pathname === item.href ? "page" : undefined}
          className="site-nav-link"
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header
      className={`relative z-30 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-8 ${className}`}
    >
      <Link to="/" className="site-logo" aria-label="Meinard, home">
        meinard<span aria-hidden="true">.</span>
      </Link>

      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-10">{links()}</ul>
      </nav>

      <button
        type="button"
        className="site-menu-button md:hidden"
        aria-expanded={open}
        aria-controls="site-mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      {open && (
        <nav
          id="site-mobile-nav"
          aria-label="Primary"
          className="site-mobile-nav md:hidden"
        >
          <ul className="flex flex-col">{links(() => setOpen(false))}</ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
