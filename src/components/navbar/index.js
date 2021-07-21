import React from 'react'
import { Container, List, ListItem, MenuLogo, DropDownMenu, DropDownMenuItem, DropDownMenuItemPlanet, DropDownMenuText, DropDownMenuItemChevron } from './styles/NavBar'
import { usePlanetData } from '../../context/PlanetContext'
import { useCurrentPlanetUpdate } from '../../context/CurrentPlanetContext'
import { COLOR_SCHEME } from '../../constants/constants'

export default function NavBar({children, ...restProps}) {  
    return (
        <Container {...restProps}>{children}</Container>
    )
}

NavBar.ListItem = function NavBarListItem({ children, ...restProps}) {
    return (
        <ListItem {...restProps}>{children}</ListItem>
    )
}

NavBar.List = function NavBarList({ children, ...restProps}) {
    const planetData = usePlanetData();
    // const currentPlanet = useCurrentPlanet();
    // console.log('**** List current planet = ', currentPlanet)

    const updateCurrentPlanet = useCurrentPlanetUpdate()

    function handlePlanetClick(planet) {
        //console.log(`${planet} was clicked `)
        updateCurrentPlanet(`${planet}`)
        //console.log('updated planet = ', currentPlanet)
    }
    
    function getPlanetAccentColor(planet) {
        return planet === 'Mercury' ? COLOR_SCHEME.MERCURY : 
        planet === 'Venus' ? COLOR_SCHEME.VENUS :
        planet === 'Earth' ? COLOR_SCHEME.EARTH :
        planet === 'Mars' ? COLOR_SCHEME.MARS :
        planet === 'Jupiter' ? COLOR_SCHEME.JUPITER :
        planet === 'Saturn' ? COLOR_SCHEME.SATURN :
        planet === 'Uranus' ? COLOR_SCHEME.URANUS :
            COLOR_SCHEME.NEPTUNE 
    }

    return (
        <List {...restProps}>
            {
                planetData.map(planet => {
                    return (
                        <ListItem color={getPlanetAccentColor(planet.name)} planet={planet.name} key={planet.name} onClick={ () => handlePlanetClick(planet.name)}>
                            {planet.name.toUpperCase()}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

NavBar.MenuLogo = function NavBarMenuLogo({ children, ...restProps}) {
    const imageSource = `images/icon-hamburger.svg`
    
    return (
        <MenuLogo 
            src={imageSource}
            alt="menu hamburger"
            {...restProps}>
                {children}
        </MenuLogo>
    )
}

NavBar.DropDownMenu = function NavBarDropDownMenu({ children, ...restProps}) {

    const planetData = usePlanetData();
    const updateCurrentPlanet = useCurrentPlanetUpdate()

    function handleDropDownMenuClick(planet) {
        updateCurrentPlanet(`${planet}`)        
    }    

    const imageSource = `images/icon-chevron.svg`

    return (
        <DropDownMenu 
            {...restProps}>
            {
                planetData.map(planet => {
                    return (
                        <DropDownMenuItem key={planet.name} 
                            onClick={ () => handleDropDownMenuClick(planet.name) }
                            planet={planet.name}
                            >
                                <DropDownMenuItemPlanet planet={planet.name}/>
                                <DropDownMenuText >{planet.name.toUpperCase()}</DropDownMenuText>
                                <DropDownMenuItemChevron src={imageSource} alt="chevron"/>
                        </DropDownMenuItem>
                    )
                })
            }
        </DropDownMenu>
    )
}