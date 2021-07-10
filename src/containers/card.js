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
            
            <Card.Title >THE PLANETS</Card.Title>
            <div>The current planet is {currentPlanet}</div>
            { isLoading ? 
                <div>planetary data is loading</div> :
                <>
                    <div>{currentPlanetData.name}</div>
                    {/* <div>{currentPlanetData.overview.content}</div> */}
                    <div>
                        {category === 'Overview' ? 
                            currentPlanetData.overview.content :
                            category === 'Internal Structure' ?
                            currentPlanetData.structure.content :
                            currentPlanetData.geology.content}
                    </div>
                    {/* <div>
                        {category === 'Overview' ? 
                            currentPlanetData.overview.content :
                            category === 'Internal Structure' ?
                            currentPlanetData.structure.content :
                            currentPlanetData.geology.content}
                    </div> */}
                </>

            }
            {/* <Card.Button onClick={({target}) => handleClick(target.textContent)}>Overview</Card.Button>  */}            
            {/* <Card.Button onClick={({target}) => handleClick(target.textContent)}>Internal Structure</Card.Button> */}
            {/* <Card.Button onClick={({target}) => handleClick(target.textContent)}>Surface Geology</Card.Button> */}
            <Card.Button >Overview</Card.Button>
            <Card.Button >Internal Structure</Card.Button>
            <Card.Button >Surface Geology</Card.Button>
            <Card.Image />
        </Card>
    )
}