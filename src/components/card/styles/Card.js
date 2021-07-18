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
    padding: 2em;
    margin: 0 auto;
    gap: 1em;

    a {
        text-decoration: none;
    }

    @media (min-width: 700px) {
        padding: 2em 6em;        
    }

    @media (min-width: 1500px) {
        padding: 2em 10%;        
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

export const Button = styled.div`
    border: 1px solid white;
    padding: 1em 3em;

    &:hover {        
        background: dodgerblue;    
        font-weight: 600;
    }
`

export const Image = styled.img`
    width: 50%;
    height: auto;
`

export const Label = styled.div`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.SECONDARY};
`

export const Link = styled.a`
    font-size: .75rem;
    font-weight: ${FONT_WEIGHT.BOLD};
    color: ${COLOR_SCHEME.SECONDARY};
`