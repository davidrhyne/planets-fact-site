import styled from 'styled-components';
import { COLOR_SCHEME } from '../../../constants/constants'

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

    @media (min-width: 700px) {
        flex-direction: column;
        padding: 3em;
    }

    @media (min-width: 1500px) {
        /* padding: 2em 10%;         */
    }
`

export const Title = styled.div`
    /* font-size: 800; */
    font-size: 1.75rem;
    border: 1px solid dodgerblue;

    @media (min-width: 750px) {
        /* font-size: 1.5rem; */
    }

`