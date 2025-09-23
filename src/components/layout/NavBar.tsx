import React, { useState } from 'react';
import { MenuItem } from '../../types';
import { useSmoothScroll } from '../../hooks';
import './NavBar.scss';

const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const logo = 'Shingo Watanabe';

  const menuItems: MenuItem[] = [
    {
      title: 'AboutMe',
      el: '#about',
    },
    {
      title: 'Skills',
      el: '#skills',
    },
    {
      title: 'Publications',
      el: '#publications',
    },
    {
      title: 'Carrier',
      el: '#carrier',
    },
    {
      title: 'Grants',
      el: '#grants'
    },
    {
      title: 'Products',
      el: '#products',
    },
    {
      title: 'Contact',
      el: '#contact',
    },
  ];

  const { scrollToElement } = useSmoothScroll();

  const goTo = (item: MenuItem) => {
    setIsExpanded(false);
    scrollToElement(item.el);
  };

  const scrollToHero = () => {
    scrollToElement('#hero');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <button className="navbar-item logo-item" onClick={scrollToHero}>
            <span className="logo-text">{logo}</span>
          </button>

          <button
            className={`navbar-burger ${isExpanded ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div className={`navbar-menu ${isExpanded ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="navbar-item nav-link"
                onClick={() => goTo(item)}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
