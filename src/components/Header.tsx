"use client";

import { useState } from "react";
import Image from "next/image";
import { site, scheduleHref } from "@/lib/site";
import { navLinks } from "@/lib/content";
import { PhoneIcon, MenuIcon, CloseIcon } from "@/components/Icons";
import logo from "@/images/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="header-logo" aria-label={`${site.fullName}, voltar ao início`}>
          <Image src={logo} alt={`Logotipo ${site.name}`} priority sizes="120px" />
        </a>

        <nav className="header-nav" aria-label="Seções da página">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-phone" href={site.phone.href}>
          <PhoneIcon size={18} />
          {site.phone.display}
        </a>

        <a className="btn btn--primary header-cta" href={scheduleHref}>
          Agendar
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="mobile-menu" aria-label="Menu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={site.phone.href} onClick={() => setOpen(false)}>
            <PhoneIcon size={18} style={{ marginRight: 8 }} />
            {site.phone.display}
          </a>
          <a className="btn btn--primary" href={scheduleHref} onClick={() => setOpen(false)}>
            Agendar
          </a>
        </nav>
      )}
    </header>
  );
}
