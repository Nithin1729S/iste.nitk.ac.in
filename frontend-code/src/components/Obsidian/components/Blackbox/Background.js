import React from 'react'
import Particles from 'react-tsparticles'
import { backgroundConfig } from '../../constants/background_options'
const Background = () => {
    /*
        The options json can be changed in ../constants/background_options from https://particles.js.org/
    */
    return (
        <>
            <Particles
                id='tsparticles'
                options={ backgroundConfig }
            />
        </>
    )
}

export default Background