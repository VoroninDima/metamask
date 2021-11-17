import React from 'react';
import UiLink from "../../components/UiLink";

const Header = () => (
    <nav className='header-nav'>
        <UiLink href='/'>Home</UiLink>
        <UiLink href='/send'>Send</UiLink>
    </nav>
);

export default Header;