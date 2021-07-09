import styled from 'styled-components';

export const Container = styled.div`
    /* background: ${props => props.theme.element}; */
    background-color: dodgerblue;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em;
    margin: 0 auto;

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
    /* font-size: 800; */

    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    }
`