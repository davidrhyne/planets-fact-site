import React, { useState, useEffect } from 'react'
import { Card } from '../components';
import { useCurrentPlanet } from '../context/CurrentPlanetContext'
import { usePlanetData, useIsLoading } from '../context/PlanetContext' 
import { useCategory } from '../context/CategoryContext' 

export function CardContainer( {children, ...restProps}) {
    //console.log('category = ', category)
    const isLoading = useIsLoading();
    console.log('card planet data isLoading = ', isLoading)
    const currentPlanet  = useCurrentPlanet();
    const planetData  = usePlanetData();
    let currentPlanetData = [];
    //const [ category, setCategory ] = useState('Overview')
    //console.log('card data current category = ', category)


    const category = useCategory();



    let contentBox = {}

    if (isLoading) {
        console.log('currenting loading data')
        console.log('card planet data = ', planetData)
    } else {
        currentPlanetData = planetData.filter(planet => planet.name === currentPlanet)[0]
        console.log('data loaded currentPlanetData = ', currentPlanetData)
        console.log('data loaded currentPlanetData = ', currentPlanetData.name)

    }

    // reset the view to overview when a new planet is selected
    // useEffect(()=> {
    //     setCategory( 'Overview' )
    // }, [currentPlanet])

    
    // function handleClick(value) {
    //     //console.log("category button clicked = ", value)
    //     setCategory( value )
    // }

    return (        
        <Card>
            <Card.ButtonGroup>
                <Card.Button >Overview</Card.Button>
                {/* <Card.Void>blank</Card.Void> */}
                <Card.Button >Internal</Card.Button>
                {/* <Card.Void>blank</Card.Void> */}
                <Card.Button >Surface</Card.Button>
            </Card.ButtonGroup>
            {/* <Card.Image /> */}
            <Card.ImageContainer>
                <Card.Image />
            </Card.ImageContainer>
            {/* <Card.Title >THE PLANETS</Card.Title> */}
            {/* <div>The current planet is {currentPlanet}</div> */}
            { isLoading ? 
                <div>planetary data is loading</div> :
                <>
                    <Card.Title >{currentPlanetData.name}</Card.Title>
                    {/* <div>{currentPlanetData.name}</div> */}
                    {/* <div>{currentPlanetData.overview.content}</div> */}
                    <Card.Text>
                        {category === 'Overview' ? 
                            currentPlanetData.overview.content :
                            category === 'Internal Structure' || category === 'Internal' ?
                            currentPlanetData.structure.content :
                            currentPlanetData.geology.content}
                    </Card.Text>

                    <Card.LinkContainer>
                        <Card.Label>Source : </Card.Label>
                        <Card.Link href={category === 'Overview' ? 
                                currentPlanetData.overview.source :
                                category === 'Internal Structure' || category === 'Internal' ?
                                currentPlanetData.structure.source :
                                currentPlanetData.geology.source}>
                                    Wikipedia
                                    <Card.LinkIcon src="./images/icon-source.svg"/>
                        </Card.Link>
                    </Card.LinkContainer>
                    <Card.Factoid>
                        <Card.FactoidLabel>Rotation Time</Card.FactoidLabel>
                        <Card.FactoidFact>{currentPlanetData.rotation}</Card.FactoidFact>
                    </Card.Factoid>
                    <Card.Factoid>
                        <Card.FactoidLabel>Revolution Time</Card.FactoidLabel>
                        <Card.FactoidFact>{currentPlanetData.revolution}</Card.FactoidFact>
                    </Card.Factoid>
                    <Card.Factoid>
                        <Card.FactoidLabel>Radius</Card.FactoidLabel>
                        <Card.FactoidFact>{currentPlanetData.radius}</Card.FactoidFact>
                    </Card.Factoid>
                    <Card.Factoid>
                        <Card.FactoidLabel>Average Temp.</Card.FactoidLabel>
                        <Card.FactoidFact>{currentPlanetData.temperature}</Card.FactoidFact>
                    </Card.Factoid>
                    {/* <div>
                        {category === 'Overview' ? 
                            currentPlanetData.overview.content :
                            category === 'Internal Structure' ?
                            currentPlanetData.structure.content :
                            currentPlanetData.geology.content}
                    </div> */}
                </>

            }


        </Card>
    )
}