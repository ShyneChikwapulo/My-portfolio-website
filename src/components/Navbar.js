import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { RESUME_URL, RESUME_FILENAME } from '../config';

const LINKS = [
  { to: '#about', label: 'About' },
  { to: '#experience', label: 'Experience' },
  { to: '#work', label: 'Work' },
  { to: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 100) setHidden(false);
      else if (y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const linkClass = open ? 'nav-links active' : 'nav-links';

  return (
    <nav className={hidden && !open ? 'navbar hide' : 'navbar'} aria-label="Main">
      <HashLink to="#top" className="navbar-logo">
        <div>
          Shine Chikwapulo
          <div className="hidden-arrow">&nbsp; <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i></div>
        </div>
      </HashLink>

      <button
        className="menu-icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{ background: 'none', border: 'none' }}
      >
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true" />
      </button>

      <ul className={open ? 'nav-menu active' : 'nav-menu'}>
        {LINKS.map(({ to, label }) => (
          <li className="nav-item" key={to}>
            <HashLink to={to} className={linkClass} onClick={close}>{label}</HashLink>
          </li>
        ))}
        <li className="nav-item">
          <a className={`${linkClass} nav-resume-link`} href={RESUME_URL} download={RESUME_FILENAME} onClick={close}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;