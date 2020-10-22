import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import SiteName from './SiteName';
import '../../css/global.css';

const Header = () => (
  <header className="sticky top-0 bg-purple shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-10">
          <LogoIcon />
        </div>
        <SiteName />
      </div>
      <div className="flex mt-4 sm:mt-0 headerNavLink">
        <AnchorLink className="px-4 text-white" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-white" href="#projects">
          Projects
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href="https://forms.gle/AH4zCDnRVsmUYh4j6">
          <Button className="text-sm bg-gold">Contact Us</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
