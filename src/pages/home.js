import React from 'react'
import { HeaderContainer } from '../containers/header'
import { CardContainer } from '../containers/card'
import { FooterContainer } from '../containers/footer'

export default function Home() { 
    return (
        <div>
            <HeaderContainer />
            <CardContainer />
            <FooterContainer />
        </div>
    )
}