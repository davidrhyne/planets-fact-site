import styled from 'styled-components';
import { COLOR_SCHEME, FONT_FAMILY, BREAKPOINT } from '../../../constants/constants'

export const Container = styled.div`
    font-family: ${FONT_FAMILY.SECONDARY},sans-serif;
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
    font-size: 1.75rem;

    @media (min-width: ${BREAKPOINT.TABLET}) {
        /* font-size: 1.5rem; */
        margin: .5em 0 1em;
    }

    @media (min-width: ${BREAKPOINT.DESKTOP}) {
        /* padding: .5em 0 0; */
        margin: 0;
    }
`