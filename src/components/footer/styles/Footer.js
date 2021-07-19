import styled from 'styled-components';
import { COLOR_SCHEME, FONT_WEIGHT, FONT_FAMILY } from '../../../constants/constants'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em 1em;
    margin: 0 auto;
   
`

export const Text = styled.div`
    color: ${COLOR_SCHEME.TERTIARY};
    font-size: ${FONT_WEIGHT.BOLD};
    font-family: ${FONT_FAMILY.PRIMARY};
    padding-bottom: 1.5em;

    a {
        text-decoration: none ;
        color: ${COLOR_SCHEME.WHITE};
        padding: .3em .5em;
        border-radius: 10px;
    }

    a:hover, 
    a:focus {
        background: ${COLOR_SCHEME.SECONDARY};
        color: ${COLOR_SCHEME.WHITE};
        border: 1px solid ${COLOR_SCHEME.WHITE};
    }
`