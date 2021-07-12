import React, { useState } from 'react'
import { Container, List, ListItem, MenuLogo, DropDownMenu, DropDownMenuItem } from './styles/NavBar'
import { usePlanetData } from '../../context/PlanetContext'
import { useCurrentPlanet, useCurrentPlanetUpdate } from '../../context/CurrentPlanetContext'


export default function NavBar({children, ...restProps}) {

    
    
    return (
        <Container {...restProps}>{children}</Container>
    )
}

NavBar.ListItem = function NavBarListItem({ children, ...restProps}) {
    const planetData = usePlanetData();
    planetData.forEach(planet => console.log('planets = ', planet.name))
    return (
        <ListItem {...restProps}>{children}</ListItem>
    )
}

{/* <NavBar>
<NavBar.List></NavBar.List>
<NavBar.MenuLogo></NavBar.MenuLogo>
</NavBar> */}


NavBar.List = function NavBarList({ children, ...restProps}) {
    const planetData = usePlanetData();
    //planetData.forEach(planet => console.log('planets = ', planet.name))

    // const currentPlanet = useCurrentPlanet();
    // console.log('current planet = ', currentPlanet)

    const updateCurrentPlanet = useCurrentPlanetUpdate()

    function handlePlanetClick(planet) {
        console.log(`${planet} was clicked `)
        updateCurrentPlanet(`${planet}`)
        //console.log('updated planet = ', currentPlanet)
    }
    
    return (
        <List {...restProps}>
            {
                planetData.map(planet => {
                    return (
                        <ListItem key={planet.name} onClick={ () => handlePlanetClick(planet.name)}>
                            {planet.name.toUpperCase()}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

NavBar.MenuLogo = function NavBarMenuLogo({ children, ...restProps}) {

    // function handleMenuClick() {
    //     console.log(" the menu was clicked, so now what ?! ")
    // }

    const imageSource = `images/icon-hamburger.svg`
    
    return (
        <MenuLogo 
            src={imageSource}
            // onClick={handleMenuClick}
            {...restProps}>
                {children}
        </MenuLogo>
    )
}

NavBar.DropDownMenu = function NavBarDropDownMenu({ children, ...restProps}) {

    const planetData = usePlanetData();
    //planetData.forEach(planet => console.log('planets = ', planet.name))

    // const currentPlanet = useCurrentPlanet();
    // console.log('current planet = ', currentPlanet)

    const updateCurrentPlanet = useCurrentPlanetUpdate()

    function handleDropDownMenuClick(planet) {
        //console.log('down down menu item clicked = ', planet)
        updateCurrentPlanet(`${planet}`)
        //console.log('updated planet = ', currentPlanet)
    }    

    

    return (
        <DropDownMenu 
            {...restProps}>
            {
                planetData.map(planet => {
                    return (
                        <DropDownMenuItem key={planet.name} 
                            onClick={ () => handleDropDownMenuClick(planet.name) }
                          
                            >
                            {planet.name.toUpperCase()}
                        </DropDownMenuItem>
                    )
                })
            }
        </DropDownMenu>
    )
}