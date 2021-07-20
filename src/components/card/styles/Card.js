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
        /* max-width: 900px; */
    }

    @media (min-width: 900px) {
        /* padding: 1em 4em 4em;
        display: grid;
        margin: 0 auto;
        gap: 0 1em; */
        grid-template-columns: repeat(3, 1fr); 
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
    

    @media (min-width: 700px) {
        font-size: 3rem;
        margin-left: 0;
    }

    @media (min-width: 900px) {
        font-size: 5rem;
        margin-bottom: .1em;
        
    }

`

export const Text = styled.div`
    grid-area: text;
    padding: 1em 0 4em;
    width: 90%;
    line-height: 2;
    text-align: center;
    max-width: 70%;
    border: 1px solid dodgerblue;

    @media (min-width: 700px) {
        text-align: left;
        max-width: unset;
    }
    @media (min-width: 900px) {
        font-size: .875rem;
        line-height: 1.6;
        padding: 1em 0 2em;
    }

`

export const ButtonGroup = styled.div`
    border: 1px solid rebeccapurple;
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
    /* margin-right: 5em;
    margin-left: 5em; */
    @media (min-width: 700px) {
        border-bottom: unset;
        flex-direction: column;
        
    }

    @media (min-width: 900px) {
        margin-bottom: 4em;
        font-size: .875rem;
    }

`




export const ButtonPrefix = styled.span`
    display: none;

    @media (min-width: 700px) {
        display: inline-block;
        margin-right: 2em;
        color: ${COLOR_SCHEME.LIGHT_GRAY};
    }
`

export const ButtonSuffix = styled.span`
    display: none;

    @media (min-width: 700px) {
        display: inline-block;

    }
`

export const Button = styled.div`
    /* border: 1px magenta solid; */
    padding: 2em .5em;
    margin: 0 2em;
    cursor: pointer;

    box-shadow: ${props => props.overview && props.category === 'overview' ? 
        `inset 0px -3px 0 ${props.color}` : null } ;  
    box-shadow: ${props => props.internal && props.category === 'internal' ? 
        `inset 0px -3px 0 ${props.color}` : null } ;  
    box-shadow: ${props => props.surface && props.category === 'surface ' ? 
        `inset 0px -3px 0 ${props.color}` : null  } ;  

    color: ${props => props.overview && props.category === 'overview' ? 
        `${COLOR_SCHEME.WHITE}` : null } ;  
    color: ${props => props.internal && props.category === 'internal' ? 
        `${COLOR_SCHEME.WHITE}`  : null } ;  
    color: ${props => props.surface && props.category === 'surface ' ? 
        `${COLOR_SCHEME.WHITE}`  : null  } ;  



    &:hover {        
        color: ${COLOR_SCHEME.WHITE}; 
        background: ${COLOR_SCHEME.SECONDARY};
    }

    @media (min-width: 700px) {
        box-shadow: unset;
        border: 1px solid ${COLOR_SCHEME.SECONDARY};
        padding: 2em 3em;
        margin-bottom: 2em;
        letter-spacing: 1.5px;

        background: ${props => props.overview && props.category === 'overview' ? 
            `${props.color}` : null } ;  
        background: ${props => props.internal && props.category === 'internal' ? 
            `${props.color}` : null } ;  
        background: ${props => props.surface && props.category === 'surface ' ? 
            `${props.color}` : null  } ;  

        margin-right: 0;
        margin-left: 0;
    }
    
`
export const ImageContainer = styled.div`
    grid-area: image;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid magenta;
    min-height: 300px;
    /* width: 70%; */
    /* width: auto;
    margin: auto 0; */
    /* display: flex;
    align-content: center;
    justify-content: center; */
    position: relative;
  
    @media (min-width: 400px) {
        min-height: 425px;

    }

    @media (min-width: 900px) {
        min-height: unset;

    }
`


export const Image = styled.img`
    
    /* display: block; */
    /* border: 1px red solid; */
    margin: auto; 
    /* margin: 8em 0; */
    /* margin: calc(14em * (1 - ${props => props.ratio})) 0; */
    
    /* width: 100%; */
    height: auto;
    width: calc(70% * ${props => props.ratio});
    /* box-sizing: unset; */
    /* width: 70% ; */
    /* height: calc(40% * ${props => props.ratio});
    width: auto; */
    
    z-index: -2;

    @media (min-width: 400px) {
        width: calc(60% * ${props => props.ratio});

    }

    @media (min-width: 900px) {
        width: calc(100% * ${props => props.ratio});

    }
`

export const ImageAccent = styled.img`
    max-width: 24%;
    height: auto;
    position: absolute;
    z-index: -1;
    top: 53%;

    /* @media (min-width: 400px) {
        width: calc(60% * ${props => props.ratio});

    } */
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

    @media (min-width: 900px) {
        font-size: .875rem;
    }
`

export const LinkContainer = styled.div`
    grid-area: links;
    display: flex;    
    margin: 0 0 3em;


`

export const Link = styled.a`    
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    padding: 0 .3em;

    @media (min-width: 900px) {
        font-size: .875rem;
    }
`

export const LinkIcon = styled.img`
    width: 12px;
    height: auto;
    margin-left: .5em;

    @media (min-width: 900px) {
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
    border: 1px solid limegreen;

    @media (min-width: 700px) {
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
    
    @media (min-width: 450px) {
        width: 70%;
    }

    @media (min-width: 700px) {
        flex-direction: column;
        padding: 1.5em 1em;
        margin: 0;
        width: 24%;
    }


`

export const FactoidLabel = styled.div`
    font-size: .5rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.TERTIARY};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    align-self: center;

    @media (min-width: 700px) {
        align-self: flex-start;
        margin-bottom: 1em;
    }

    @media (min-width: 900px) {
        font-size: .6875rem;
    }
`

export const FactoidFact = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY};
    font-size: 1.25rem;
    font-weight: ${FONT_WEIGHT.MEDIUM};
    text-transform: uppercase;

    @media (min-width: 700px) {
        font-size: 1.5rem;
        letter-spacing: -.3px;
    }

    @media (min-width: 900px) {
        font-size: 2.5rem;
    }
`