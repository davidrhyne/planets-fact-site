import React from 'react'
import { Header, NavBar } from '../components';
// import * as ROUTES from '../constants/routes';
// import { useTheme, useThemeUpdate } from '../context/ThemeValueContext'
// import { useHasError } from '../context/CountryDataContext'

export function HeaderContainer( {children, ...restProps}) {

    // const handleToggle = useThemeUpdate()
    // const isDarkTheme = useTheme()
    // const hasError = useHasError()

    return (        
        <Header>
            <Header.Title >THE PLANETS</Header.Title>
            <NavBar>
                <NavBar.List></NavBar.List>
            </NavBar>
        </Header>
    )
}