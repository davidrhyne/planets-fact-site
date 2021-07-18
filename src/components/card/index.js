import React, { useState } from 'react'
import { Container, Title, Text, Button, ButtonGroup, Image, Label, Link, LinkIcon, Factoid, FactoidLabel, FactoidFact} from './styles/Card'
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

Card.Label = function CardLabel({ children, ...restProps}) {
    return (
        <Label {...restProps}>{children}</Label>
    )
}

Card.Link = function CardLink({ children, ...restProps}) {
    return (
        <Link {...restProps} target="_blank">{children}</Link>
    )
}

Card.LinkIcon = function CardLinkIcon({ children, ...restProps}) {
    return (
        <LinkIcon {...restProps} target="_blank">{children}</LinkIcon>
    )
}

Card.ButtonGroup = function CardButtonGroup({ children, ...restProps}) {


    return (
        <ButtonGroup {...restProps}>{children}</ButtonGroup>
    )
}

Card.Button = function CardButton({ children, ...restProps}) {
    const currentPlanet = useCurrentPlanet()
    // console.log('button group current planet =', currentPlanet)

    const updateCategory = useCategoryUpdate();
    function handleButtonClick(value) {
        //console.log('card button was clicked = ', value)
        updateCategory(value)
    }
    return (
        <Button {...restProps} planet={currentPlanet} onClick={ ({target})=> handleButtonClick(target.textContent)} >{children}</Button>
        // <Button {...restProps} >{children}</Button>
    )
}

Card.Image = function CardImage({ ...restProps}) {
    
    const currentPlanet = useCurrentPlanet()
    const category = useCategory()

    const pictureSuffix = category.slice(0,8) !== 'Internal' ? "" : "-internal"
    const imageSource = `images/planet-${currentPlanet.toLowerCase()}${pictureSuffix}.svg`
    const geologySource = `images/geology-${currentPlanet.toLowerCase()}.png`
    return (
        <>
            <Image src={imageSource}{...restProps} />
            { category.slice(0,7) === 'Surface' ? <Image src={geologySource}{...restProps} /> : null  }
        </>
    )
}

Card.Factoid = function CardFactoid({ children, ...restProps}) {
    return (
        <Factoid {...restProps} >{children}</Factoid>
    )
}

Card.FactoidLabel = function CardFactoidLabel({ children, ...restProps}) {
    return (
        <FactoidLabel {...restProps} >{children}</FactoidLabel>
    )
}
Card.FactoidFact = function CardFactoidFact({ children, ...restProps}) {
    return (
        <FactoidFact {...restProps} >{children}</FactoidFact>
    )
}
