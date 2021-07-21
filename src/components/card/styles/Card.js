import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, FONT_WEIGHT, BREAKPOINT } from '../../../constants/constants'

export const Container = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 2em; 
    margin: 0 auto;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        padding: 1em 4em 4em;
        display: grid;
        margin: 0 auto;
        gap: 0 1em;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 425px;
        grid-template-areas: 
            "image image"
            "title buttons"
            "text buttons"
            "links buttons"
            "factoids factoids"        
        ;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        grid-template-columns: repeat(2, 1fr) 350px; 
        grid-template-rows: 1fr;
        grid-template-areas: 
            "image image title"
            "image image text"
            "image image links"
            "image image buttons"
            "image image buttons"
            "factoids factoids factoids"        
        ;
        max-width: 1200px;
    }
`

export const Title = styled.div`
    grid-area: title;
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 2.5rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
    text-transform: uppercase;
    margin: .2em ;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        font-size: 3rem;
        margin-left: 0;
        margin-top: .5em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: 5rem;
        margin-bottom: .1em;
        padding: 1em 0 .1em;
    }
`

export const Text = styled.div`
    grid-area: text;
    padding: 1em 0 4em;
    width: 90%;
    line-height: 2;
    text-align: center;    

    @media (min-width: ${BREAKPOINT.SMALL_TABLET}) {
        max-width: 70%;
    }

    @media (min-width: ${BREAKPOINT.TABLET}) {
        text-align: left;
        max-width: unset;
        padding: 1em 0 2em;
    }
    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: .875rem;
        line-height: 1.8;
        width: 100%;
        padding: 0;
        min-height: 180px;
    }
`

export const ButtonGroup = styled.div`
    grid-area: buttons;
    display: flex;
    justify-content: space-evenly;    
    text-transform: uppercase;
    width: 100%;
    color: ${COLOR_SCHEME.TERTIARY};
    font-size: .5625rem;
    letter-spacing: 1.9px;
    font-weight: ${FONT_WEIGHT.BOLD};
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};
    @media (min-width: ${BREAKPOINT.TABLET}) {
        border-bottom: unset;
        flex-direction: column;        
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        margin-bottom: 6em;
        font-size: .75rem;
    }
`

export const ButtonPrefix = styled.span`
    display: none;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        display: inline-block;
        margin-right: 2em;
        color: ${COLOR_SCHEME.LIGHT_GRAY};
    }
`

export const Button = styled.div`
    padding: 2em .5em;
    margin: 0 2em;
    cursor: pointer;

    box-shadow: ${props => props.overview && props.category === 'overvie' ? 
        `inset 0px -3px 0 ${props.color}` : null } ;  
    box-shadow: ${props => props.internal && props.category === 'interna' ? 
        `inset 0px -3px 0 ${props.color}` : null } ;  
    box-shadow: ${props => props.surface && props.category === 'surface' ? 
        `inset 0px -3px 0 ${props.color}` : null  } ;  

    color: ${props => props.overview && props.category === 'overvie' ? 
        `${COLOR_SCHEME.WHITE}` : null } ;  
    color: ${props => props.internal && props.category === 'interna' ? 
        `${COLOR_SCHEME.WHITE}`  : null } ;  
    color: ${props => props.surface && props.category === 'surface' ? 
        `${COLOR_SCHEME.WHITE}`  : null  } ;  

    &:hover {        
        color: ${COLOR_SCHEME.WHITE}; 
        background: ${COLOR_SCHEME.SECONDARY};
    }

    @media (min-width: ${BREAKPOINT.TABLET}) {
        box-shadow: unset;
        border: 1px solid ${COLOR_SCHEME.SECONDARY};
        padding: 2em 3em;
        margin-bottom: 2em;
        letter-spacing: 1.5px;
        min-width: 70%;

        background: ${props => props.overview && props.category === 'overvie' ? 
            `${props.color}` : null } ;  
        background: ${props => props.internal && props.category === 'interna' ? 
            `${props.color}` : null } ;  
        background: ${props => props.surface && props.category === 'surface' ? 
            `${props.color}` : null  } ;  

        margin-right: 0;
        margin-left: auto;
    }
    
    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        margin-left: 0;
        padding: 1.5em 2.5em;
        margin-bottom: 1em;
    }
`
export const ButtonSuffix = styled.span`
    display: none;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        display: inline-block;

    }
`

export const ImageContainer = styled.div`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
    width: 90%;
    position: relative;
  
    @media (min-width: ${BREAKPOINT.SMALL_TABLET}) {
        min-height: 425px;
        margin: 0 auto;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        min-height: unset;
    }
`

export const Image = styled.img`
    margin: auto; 
    height: auto;
    width: calc(70% * ${props => props.ratio});
    z-index: -2;

    @media (min-width: ${BREAKPOINT.SMALL_TABLET}) {
        width: calc(60% * ${props => props.ratio});
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        width: calc(90% * ${props => props.ratio});  
    }
`

export const ImageAccent = styled.img`
    width: 24%;
    height: auto;
    position: absolute;
    z-index: -1;
    top: 53%;

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        top: 70%;
    }
`

export const LinkContainer = styled.div`
    grid-area: links;
    display: flex;    
    margin: 0 0 3em;

    @media (min-width: ${BREAKPOINT.TABLET}) {
    margin: 0 0 4em;
    }
`

export const Label = styled.span`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.REGULAR};
    color: ${COLOR_SCHEME.TERTIARY};

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: .875rem;
    }
`

export const Link = styled.a`    
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    padding: 0 .3em;

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: .875rem;
    }
`

export const LinkIcon = styled.img`
    width: 12px;
    height: auto;
    margin-left: .5em;

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        width: 14px;
    }
`
export const FactoidContainer = styled.div`
    grid-area: factoids;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 0;
    }
`

export const Factoid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 1px solid ${COLOR_SCHEME.SECONDARY};
    padding: 1em 2em;
    box-sizing: border-box;
    margin: 0 auto 1em;
    
    @media (min-width: ${BREAKPOINT.SMALL_TABLET}) {
        width: 85%;
    }

    @media (min-width: ${BREAKPOINT.TABLET}) {
        flex-direction: column;
        padding: 1.5em 1em;
        margin: 0;
        width: 24%;
    }
    
    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        width: 23%;
        padding: 2.5em 2em;
    }
`

export const FactoidFact = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 1.25rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
    text-transform: uppercase;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        font-size: 1.5rem;
        letter-spacing: -.3px;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: 2.5rem;
    }
`

export const FactoidLabel = styled.div`
    font-size: .5rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    align-self: center;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        align-self: flex-start;
        margin-bottom: 1em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        font-size: .6875rem;
    }
`