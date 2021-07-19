import React, { useState } from 'react'
import { Container, Title, Text, Void, Button, ButtonGroup, ImageContainer, Image, ImageAccent, Label, LinkContainer, Link, LinkIcon, Factoid, FactoidLabel, FactoidFact} from './styles/Card'
import { usePlanetData } from '../../context/PlanetContext'
import { useCurrentPlanet, useCurrentPlanetUpdate } from '../../context/CurrentPlanetContext'
import { useCategory, useCategoryUpdate } from '../../context/CategoryContext'
import { COLOR_SCHEME, PLANET_RATIO } from '../../constants/constants'


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

Card.Void = function CardVoid({ children, ...restProps}) {
    return (
        <Void {...restProps}>{children}</Void>
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

Card.LinkContainer = function CardLinkContainer({ children, ...restProps}) {
    return (
        <LinkContainer {...restProps} target="_blank">{children}</LinkContainer>
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
        <ButtonGroup  {...restProps}>{children}</ButtonGroup>
    )
}

Card.Button = function CardButton({ children, ...restProps}) {
    const currentPlanet = useCurrentPlanet()
    // console.log('button group current planet =', currentPlanet)

    const category = useCategory()
    console.log('category = ', category.toLowerCase())

    const updateCategory = useCategoryUpdate();
    function handleButtonClick(value) {
        //console.log('card button was clicked = ', value)
        updateCategory(value)

    }

    function getPlanetAccentColor() {
        return currentPlanet === 'Mercury' ? COLOR_SCHEME.MERCURY : 
        currentPlanet === 'Venus' ? COLOR_SCHEME.VENUS :
        currentPlanet === 'Earth' ? COLOR_SCHEME.EARTH :
        currentPlanet === 'Mars' ? COLOR_SCHEME.MARS :
        currentPlanet === 'Jupiter' ? COLOR_SCHEME.JUPITER :
        currentPlanet === 'Saturn' ? COLOR_SCHEME.SATURN :
        currentPlanet === 'Uranus' ? COLOR_SCHEME.URANUS :
            COLOR_SCHEME.NEPTUNE 
    }

    return (
        <Button {...restProps} category={category.toLowerCase()}  planet={currentPlanet} color={getPlanetAccentColor()} onClick={ ({target})=> handleButtonClick(target.textContent)} >{children}</Button>
        // <Button {...restProps} >{children}</Button>
    )
}

Card.ImageContainer = function CardImageContainer({ children, ...restProps}) {
    return (
        <ImageContainer {...restProps} >{children}</ImageContainer>
    )
}


Card.ImageAccent = function CardImageAccent({ ...restProps}) {
    return (
        <ImageAccent {...restProps} />
    )
}

Card.Image = function CardImage({ ...restProps}) {
    
    const currentPlanet = useCurrentPlanet()
    const category = useCategory()

    const pictureSuffix = category.slice(0,8) !== 'Internal' ? "" : "-internal"
    const imageSource = `images/planet-${currentPlanet.toLowerCase()}${pictureSuffix}.svg`
    const geologySource = `images/geology-${currentPlanet.toLowerCase()}.png`

    
    const ratio = currentPlanet === 'Mercury' ? PLANET_RATIO.MERCURY : 
        currentPlanet === 'Venus' ? PLANET_RATIO.VENUS :
        currentPlanet === 'Earth' ? PLANET_RATIO.EARTH :
        currentPlanet === 'Mars' ? PLANET_RATIO.MARS :
        currentPlanet === 'Jupiter' ? PLANET_RATIO.JUPITER :
        currentPlanet === 'Saturn' ? PLANET_RATIO.SATURN :
        currentPlanet === 'Uranus' ? PLANET_RATIO.URANUS :
            PLANET_RATIO.NEPTUNE
    console.log('ratio = ', ratio)

    return (
        <>
            <Image ratio={ratio} src={imageSource}{...restProps} />
            { category.slice(0,7) === 'Surface' ? <ImageAccent src={geologySource}{...restProps} /> : null  }
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
