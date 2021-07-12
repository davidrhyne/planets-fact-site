import styled from 'styled-components';
import { COLOR_SCHEME } from '../../../constants/constants'


export const Container = styled.div`
    /* background: ${props => props.theme.element}; */

    border: 1px navy solid;
    color: white;
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em;
    margin: 0 auto; */
 

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

export const List = styled.div`

    display: flex;
    justify-content: flex-end;

    /* font-size: 800; */
/* 
    @media (min-width: 700px) {
        font-size: 1.5rem;
    }

    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    } */
`
export const ListItem = styled.div`
    padding: .5em;
    /* font-size: 800; */

    display: none;
    @media (min-width: 700px) {
        display: block;
    }


/* 


    &:hover {        
        box-shadow: 0px 2px 0px 0px ${props => props.theme.hover};    
    } */
`

export const MenuLogo = styled.img`
    display: block;
    /* adjust the filter to get close to #38384f */
    filter: ${props => props.isMenuOpen ? 'invert(17%) sepia(7%) saturate(3029%) hue-rotate(201deg) brightness(52%) contrast(80%);' : null};
    width: 100%;
    height: auto;

    @media (min-width: 700px) {
        display: none;
    }
`

export const DropDownMenu = styled.div`  
    display: ${props => props.isMenuOpen ? 'block' : 'none'};

    position: absolute;
    width: 90%;
    left: 0;
    top: 100px;
`

export const DropDownMenuItem = styled.div`
    background: dodgerblue;    
    color: white;

`