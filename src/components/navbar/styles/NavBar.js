import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT, BREAKPOINT } from '../../../constants/constants'

export const Container = styled.div`
    color: white;
    z-index: 9;

    a {
        text-decoration: none;
    }
`

export const List = styled.div`
    font-family: ${FONT_FAMILY.PRIMARY};
    display: flex;
    justify-content: flex-end;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        font-weight: ${FONT_WEIGHT.BOLD};
        color: ${COLOR_SCHEME.LIGHT_GRAY};
        letter-spacing: 1px;        
    }
`
export const ListItem = styled.div`    
    padding: 1em;
    cursor: pointer;
    display: none;

    &:hover {       
        box-shadow: inset 0 5px 0px 0px ${props => props.color};
    } 

    @media (min-width: ${BREAKPOINT.TABLET}) {
        display: block;
        padding: 1em 1.5em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        padding: 3em 1.5em;
    }
`

export const MenuLogo = styled.img`
    display: block;
    /* adjust the filter to get close to #38384f */
    filter: ${props => props.isMenuOpen ? 'invert(17%) sepia(7%) saturate(3029%) hue-rotate(201deg) brightness(52%) contrast(80%);' : null};
    width: 100%;
    height: auto;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        display: none;
    }
`

export const DropDownMenu = styled.div`  
    display: ${props => props.isMenuOpen ? 'block' : 'none'};
    position: absolute;
    width: 90%;
    left: 5%;
    top: 80px;
`

export const DropDownMenuItem = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${COLOR_SCHEME.PRIMARY};
    padding: 2em;
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};
    cursor: pointer;

    &:hover {        
        background-color: ${COLOR_SCHEME.SECONDARY};
        border-bottom: 3px solid ${props => 
        props.planet === 'Mercury' ? COLOR_SCHEME.MERCURY_PLANET : 
        props.planet === 'Venus' ? COLOR_SCHEME.VENUS_PLANET :
        props.planet === 'Earth' ? COLOR_SCHEME.EARTH_PLANET :
        props.planet === 'Mars' ? COLOR_SCHEME.MARS_PLANET :
        props.planet === 'Jupiter' ? COLOR_SCHEME.JUPITER_PLANET :
        props.planet === 'Saturn' ? COLOR_SCHEME.SATURN_PLANET :
        props.planet === 'Uranus' ? COLOR_SCHEME.URANUS_PLANET :
            COLOR_SCHEME.NEPTUNE_PLANET};
    } 
`

export const DropDownMenuText = styled.div`
    font-family: 'Spartan', sans-serif;
    font-size: .9375rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    letter-spacing: 1.4px;
    width: 90%;
    align-items: center;
    margin-top: .3em;
`

export const DropDownMenuItemPlanet = styled.span`
    width: 20px;
    height: 20px;
    background: ${props => 
        props.planet === 'Mercury' ? COLOR_SCHEME.MERCURY_PLANET : 
        props.planet === 'Venus' ? COLOR_SCHEME.VENUS_PLANET :
        props.planet === 'Earth' ? COLOR_SCHEME.EARTH_PLANET :
        props.planet === 'Mars' ? COLOR_SCHEME.MARS_PLANET :
        props.planet === 'Jupiter' ? COLOR_SCHEME.JUPITER_PLANET :
        props.planet === 'Saturn' ? COLOR_SCHEME.SATURN_PLANET :
        props.planet === 'Uranus' ? COLOR_SCHEME.URANUS_PLANET :
            COLOR_SCHEME.NEPTUNE_PLANET};
    border-radius: 50%;
    display: inline-block;
    margin-right: 1.5em;
`

export const DropDownMenuItemChevron = styled.img`
    display: inline-block;
    width: auto;
    height: 10px;
`