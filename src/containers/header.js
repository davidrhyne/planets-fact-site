import React, { useState } from 'react'
import { Header, NavBar } from '../components';

export function HeaderContainer( {children, ...restProps}) {
    // state to display or hide the menu
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    function handleMenuLogoClick() {
        // toggle current boolean value 
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (        
        <Header>
            <Header.Title >THE PLANETS</Header.Title>
            <NavBar >
                <NavBar.List></NavBar.List>
                <NavBar.MenuLogo isMenuOpen={isMenuOpen} onClick={handleMenuLogoClick}></NavBar.MenuLogo>
                <NavBar.DropDownMenu onClick={handleMenuLogoClick} isMenuOpen={isMenuOpen}></NavBar.DropDownMenu>
            </NavBar>            
        </Header>
    )
}