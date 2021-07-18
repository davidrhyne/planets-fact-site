import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT } from '../../../constants/constants'


export const Container = styled.div`
    /* background: ${props => props.theme.element}; */
    /* background-color: rebeccapurple; */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;
    margin: 0 auto;
    gap: 1em;

    a {
        text-decoration: none;
    }

    @media (min-width: 700px) {
        
    }

    @media (min-width: 1500px) {
        
    }
`

export const Title = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 2.5rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    }
`

export const Text = styled.div`


    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    text-transform: uppercase;
    color: ${COLOR_SCHEME.TERTIARY};
    font-size: .5625rem;
    letter-spacing: 1.9px;
    font-weight: ${FONT_WEIGHT.BOLD};
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};

    &:hover {        
        
        
    }
`

export const Button = styled.div`

    padding: 2em 4em;
    /* box-shadow: 0px 52px 0px -40px white;
    position: relative;
      */

    &:hover {        
        color: ${COLOR_SCHEME.WHITE}; 
        
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

    @media (min-width: 700px) {
        border: 1px solid white;

    }
`

export const Image = styled.img`
    width: 50%;
    height: auto;
`

export const Label = styled.div`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
`

export const Link = styled.a`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
`

export const LinkIcon = styled.img`
    width: 12px;
    height: auto;
`

export const Factoid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    border: 1px magenta solid;
    padding: 1em;
`

export const FactoidLabel = styled.div`
    font-size: .5rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    text-transform: uppercase;
    letter-spacing: 1.7;
    align-self: center;
`

export const FactoidFact = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 1.25rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
`