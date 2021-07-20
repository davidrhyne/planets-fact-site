import styled from 'styled-components';
import { COLOR_SCHEME, BREAKPOINT } from '../../../constants/constants'

export const Container = styled.div`
    /* background: ${props => props.theme.ACCENT};  */
    /* background-color: dodgerblue; */
    font-family: 'Antonio',sans-serif;
    color: ${COLOR_SCHEME.WHITE};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 2em;
    margin: 0 auto;
    border-bottom: 1px solid ${COLOR_SCHEME.SECONDARY};

    a {
        text-decoration: none;
    }

    @media (min-width: ${BREAKPOINT.TABLET}) {
        flex-direction: column;
        padding: 2em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        flex-direction: row;
        margin: 0;
        padding: 0 3em;
    }

    @media (min-width: ${BREAKPOINT.MAX}) {
        padding: 0 5em;
    }
`

export const Title = styled.div`
    /* font-size: 800; */
    font-size: 1.75rem;
    border: 1px solid dodgerblue;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        /* font-size: 1.5rem; */
        margin: .5em 0 1em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        /* padding: .5em 0 0; */
        margin: 0;
    }

`