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
    padding: 0 0 2em; 
    margin: 0 auto;
    /* gap: 1em; */

    @media (min-width: 700px) {
        
    }

    @media (min-width: 1500px) {
        
    }
`

export const Title = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 2.5rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
    text-transform: uppercase;
    margin: .2em ;
    

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

`

export const Text = styled.div`
    padding: 1em 0 4em;
    width: 90%;
    line-height: 2;
    text-align: center;

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;    
    text-transform: uppercase;
    width: 100%;
    color: ${COLOR_SCHEME.TERTIARY};
    font-size: .5625rem;
    letter-spacing: 1.9px;
    font-weight: ${FONT_WEIGHT.BOLD};
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};
    /* margin-right: 5em;
    margin-left: 5em; */

    &:hover {        
        
        
    }
`



export const Button = styled.div`
    /* border: 1px magenta solid; */
    padding: 2em .5em;
    margin: 0 2em;
    cursor: pointer;

    &:hover {        
        color: ${COLOR_SCHEME.WHITE}; 
        
        /* border-bottom: 3px solid ${props => 
        props.planet === 'Mercury' ? COLOR_SCHEME.MERCURY_PLANET : 
        props.planet === 'Venus' ? COLOR_SCHEME.VENUS_PLANET :
        props.planet === 'Earth' ? COLOR_SCHEME.EARTH_PLANET :
        props.planet === 'Mars' ? COLOR_SCHEME.MARS_PLANET :
        props.planet === 'Jupiter' ? COLOR_SCHEME.JUPITER_PLANET :
        props.planet === 'Saturn' ? COLOR_SCHEME.SATURN_PLANET :
        props.planet === 'Uranus' ? COLOR_SCHEME.URANUS_PLANET :
            COLOR_SCHEME.NEPTUNE_PLANET}; */

        box-shadow: inset 0px -3px 0 ${props => 
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
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border: 1px solid magenta; */
    min-height: 300px;
    /* width: auto;
    margin: auto 0; */
    /* display: flex;
    align-content: center;
    justify-content: center; */
    position: relative;
  
`


export const Image = styled.img`
    
    display: block;
    /* border: 1px red solid; */
    margin: auto; 
    /* margin: 8em 0; */
    /* margin: calc(14em * (1 - ${props => props.ratio})) 0; */
    width: calc(70% * ${props => props.ratio});
    height: auto;
    
    z-index: -2;
`

export const ImageAccent = styled.img`
    width: 30%;
    height: auto;
    position: absolute;
    z-index: -1;
    top: 53%;
`

export const Void = styled.div`
    border: 1px solid red;
    padding: 0 1em;
    visibility: hidden;
`

export const Label = styled.span`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.REGULAR};
    color: ${COLOR_SCHEME.TERTIARY};
`

export const LinkContainer = styled.div`
    display: flex;    
    margin: 0 0 3em;
`

export const Link = styled.a`    
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    padding: 0 .3em;
    
`

export const LinkIcon = styled.img`
    width: 12px;
    height: auto;
    margin-left: .5em;
`

export const Factoid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    border: 1px solid ${COLOR_SCHEME.SECONDARY};
    padding: 1em 2em;
    box-sizing: border-box;
    margin-bottom: 1em;
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
    text-transform: uppercase;
`