import React, { useState } from 'react'
import { Container, Title, Text, Button, Image} from './styles/Card'
import { usePlanetData } from '../../context/PlanetContext'
import { useCurrentPlanet, useCurrentPlanetUpdate } from '../../context/CurrentPlanetContext'
import { useCategory, useCategoryUpdate } from '../../context/CategoryContext'


export default function Card({children, ...restProps}) {

   // const [ category, setCategory ] = useState('overview - state from card')

    return (
        <Container { ...restProps}>{children}</Container>
    )
}

Card.Title = function CardTitle({ children, ...restProps}) {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Card.Text = function CardText({ children, ...restProps}) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Card.Button = function CardButton({ children, ...restProps}) {
    const updateCategory = useCategoryUpdate();
    function handleButtonClick(value) {
        console.log('card button was clicked = ', value)
        updateCategory(value)
    }
    return (
        <Button {...restProps} onClick={ ({target})=> handleButtonClick(target.textContent)} >{children}</Button>
        // <Button {...restProps} >{children}</Button>
    )
}

Card.Image = function CardImage({ ...restProps}) {
    
    const currentPlanet = useCurrentPlanet()
    const category = useCategory()

    const pictureSuffix = category !== 'Internal Structure' ? "" : "-internal"
    const imageSource = `images/planet-${currentPlanet.toLowerCase()}${pictureSuffix}.svg`
    const geologySource = `images/geology-${currentPlanet.toLowerCase()}.png`
    return (
        <>
            <Image src={imageSource}{...restProps} />
            { category === 'Surface Geology' ? <Image src={geologySource}{...restProps} /> : null  }
        </>
    )
}