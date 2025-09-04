
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { to: '/', text: 'Accueil' },
  { to: '/a-propos', text: 'À propos' },
  { to: '/formations', text: 'Formations' },
  { to: '/galerie', text: 'Galerie & Événements' },
  { to: '/nos-talents', text: 'Nos Talents' },
  { to: '/admissions', text: 'Admissions' },
  { to: '/actualites', text: 'Actualités' },
  { to: '/contact', text: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = 'https://scontent.flbv4-1.fna.fbcdn.net/v/t39.30808-6/284489863_103459222388793_5383421878124120700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFTD-WFpfgyGCqilNxp9n7WGqqxuRDEoKYaqrG5EMSgpqq7cbFKiK7myD1fxbQt2bbIX2faYNbbiBo891yah5DH&_nc_ohc=pgiYDuzDMhgQ7kNvwGAkKY1&_nc_oc=AdntxJqsag6z0oJt85XPXRBP3cMwyrgOq2wQUze35nqNZyjYyb99d5SmNz7pMqy5Z58&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=u7LzfT4gNYfmh7Qxh_aSUA&oh=00_AfVPjxJCvKAJV8tW1SCXlfKA404b-lVpYgOyAcQqj9eP9w&oe=68BB8120';

  const activeLinkClass = 'text-brand-gold';
  const inactiveLinkClass = 'hover:text-brand-gold transition-colors duration-300';

  const NavLinksComponent: React.FC<{isMobile?: boolean}> = ({ isMobile = false }) => (
    <nav className={`${isMobile ? 'flex flex-col items-center space-y-4 py-8' : 'hidden md:flex md:items-center md:space-x-8'}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} uppercase font-serif tracking-wider`}
          onClick={() => setIsMenuOpen(false)}
        >
          {link.text}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <header className="bg-brand-dark text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src={logoUrl} alt="Logo Ecole de Mode de Nzeng Ayong" className="h-16 w-auto" />
        </Link>
        <NavLinksComponent />
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark absolute w-full">
          <NavLinksComponent isMobile={true}/>
        </div>
      )}
    </header>
  );
};

export default Header;