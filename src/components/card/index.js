import React from 'react'
import { Container, Title, Text, 
         ButtonGroup, ButtonPrefix, Button, ButtonSuffix,
         ImageContainer, Image, ImageAccent, 
         LinkContainer, Label, Link, LinkIcon, 
         FactoidContainer, Factoid, FactoidLabel, FactoidFact
        } from './styles/Card'
import { useCurrentPlanet} from '../../context/CurrentPlanetContext'
import { useCategory, useCategoryUpdate } from '../../context/CategoryContext'
import { COLOR_SCHEME, PLANET_RATIO } from '../../constants/constants'


export default function Card({children, ...restProps}) {
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

Card.ButtonGroup = function CardButtonGroup({ children, ...restProps}) {
    return (
        <ButtonGroup  {...restProps}>{children}</ButtonGroup>
    )
}

Card.ButtonPrefix = function CardButtonPrefix({ children, ...restProps}) {
    return (
        <ButtonPrefix  {...restProps}>{children}</ButtonPrefix>
    )
}

Card.Button = function CardButton({ children, ...restProps}) {
    const currentPlanet = useCurrentPlanet()
    const category = useCategory()
    const updateCategory = useCategoryUpdate();

    function handleButtonClick(value) {

        /* if the prefix or suffix is clicked instead of anywhere else on the button, then adjust the value to the expected category value */
        if (value === '01') {
            updateCategory('Overview')
        } else if (value === '02' || value.trim() === 'Structure') {
            updateCategory('Internal Structure')
        } else if (value === '03' || value.trim() === 'Geology') {
            updateCategory('Surface Geology')
        } else {
            updateCategory(value.slice(2))
        }
    }

    // resoloves the accent color used as the background for the button
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
        <Button 
            {...restProps} 
            category={category.slice(0,7).toLowerCase()}  
            planet={currentPlanet} color={getPlanetAccentColor()} 
            onClick={ ({target})=> handleButtonClick(target.textContent)} 
        >
            {children}
        </Button>
    )
}

Card.ButtonSuffix = function CardButtonSuffix({ children, ...restProps}) {
    return (
        <ButtonSuffix  {...restProps}>{children}</ButtonSuffix>
    )
}

Card.ImageContainer = function CardImageContainer({ children, ...restProps}) {
    return (
        <ImageContainer {...restProps} >{children}</ImageContainer>
    )
}

Card.Image = function CardImage({ ...restProps}) {    
    const currentPlanet = useCurrentPlanet()
    const category = useCategory()

    const pictureSuffix = category.slice(0,8) !== 'Internal' ? "" : "-internal"
    const imageSource = `images/planet-${currentPlanet.toLowerCase()}${pictureSuffix}.svg`
    const geologySource = `images/geology-${currentPlanet.toLowerCase()}.png`
    const altDescription = category.slice(0,8) === 'Internal' ? 
        `stylistic rendering of the internal layers of planet ${currentPlanet}` : 
        `stylistic rendering of the planet ${currentPlanet}` 
    
    const ratio = currentPlanet === 'Mercury' ? PLANET_RATIO.MERCURY : 
        currentPlanet === 'Venus' ? PLANET_RATIO.VENUS :
        currentPlanet === 'Earth' ? PLANET_RATIO.EARTH :
        currentPlanet === 'Mars' ? PLANET_RATIO.MARS :
        currentPlanet === 'Jupiter' ? PLANET_RATIO.JUPITER :
        currentPlanet === 'Saturn' ? PLANET_RATIO.SATURN :
        currentPlanet === 'Uranus' ? PLANET_RATIO.URANUS :
            PLANET_RATIO.NEPTUNE
 
    return (
        <>
            <Image ratio={ratio} src={imageSource} alt={altDescription} {...restProps} />
                { category.slice(0,7) === 'Surface' ? 
                    <ImageAccent src={geologySource} alt={`geology of the planet ${currentPlanet}`} {...restProps} /> 
                    : null  
                }
        </>
    )
}

Card.ImageAccent = function CardImageAccent({ ...restProps}) {
    return (
        <ImageAccent {...restProps} />
    )
}

Card.LinkContainer = function CardLinkContainer({ children, ...restProps}) {
    return (
        <LinkContainer {...restProps} >{children}</LinkContainer>
    )
}

Card.Label = function CardLabel({ children, ...restProps}) {
    return (
        <Label {...restProps}>{children}</Label>
    )
}

Card.Link = function CardLink({ children, ...restProps}) {
    return (
        <Link {...restProps} target="_blank" rel="noreferrer">{children}</Link>
    )
}

Card.LinkIcon = function CardLinkIcon({ children, ...restProps}) {
    return (
        <LinkIcon {...restProps} target="_blank" rel="noreferrer" alt="wikipedia link">{children}</LinkIcon>
    )
}

Card.FactoidContainer = function CardFactoidContainer({ children, ...restProps}) {
    return (
        <FactoidContainer {...restProps} >{children}</FactoidContainer>
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
