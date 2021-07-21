import React from 'react'
import { Card } from '../components';
import { useCurrentPlanet } from '../context/CurrentPlanetContext'
import { usePlanetData, useIsLoading } from '../context/PlanetContext' 
import { useCategory } from '../context/CategoryContext' 

export function CardContainer( {children, ...restProps}) {
    const isLoading = useIsLoading();
    const currentPlanet  = useCurrentPlanet();
    const planetData  = usePlanetData();
    let currentPlanetData = [];
    const category = useCategory();

    if (isLoading) {
        // console.log('currenting loading data')
    } else {
        currentPlanetData = planetData.filter(planet => planet.name === currentPlanet)[0]
    }
    
    return (        
        <Card>
            <Card.ButtonGroup>
                <Card.Button overview >
                    <Card.ButtonPrefix>01</Card.ButtonPrefix>
                    Overview
                </Card.Button>
                <Card.Button internal >
                    <Card.ButtonPrefix>02</Card.ButtonPrefix>
                    Internal
                    <Card.ButtonSuffix>&nbsp;Structure</Card.ButtonSuffix>
                </Card.Button>
                <Card.Button surface >
                    <Card.ButtonPrefix>03</Card.ButtonPrefix>
                    Surface
                    <Card.ButtonSuffix>&nbsp;Geology</Card.ButtonSuffix>
                </Card.Button>
            </Card.ButtonGroup>
            <Card.ImageContainer>
                <Card.Image />
            </Card.ImageContainer>
            { isLoading ? 
                <div>planetary data is loading</div> :
                <>
                    <Card.Title >{currentPlanetData.name}</Card.Title>
                    <Card.Text>
                        {category === 'Overview' ? 
                            currentPlanetData.overview.content :
                            category.slice(0,8) === 'Internal' ?
                            currentPlanetData.structure.content :
                            currentPlanetData.geology.content}
                    </Card.Text>
                    <Card.LinkContainer>
                        <Card.Label>Source : </Card.Label>
                        <Card.Link href={category === 'Overview' ? 
                                currentPlanetData.overview.source :
                                category.slice(0,8) === 'Internal' ?
                                currentPlanetData.structure.source :
                                currentPlanetData.geology.source}>
                                    Wikipedia
                                    <Card.LinkIcon src="./images/icon-source.svg"/>
                        </Card.Link>
                    </Card.LinkContainer>
                    <Card.FactoidContainer>
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
                    </Card.FactoidContainer>
                </>
            }
        </Card>
    )
}