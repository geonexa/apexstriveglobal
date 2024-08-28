import React from 'react'
import { TechnologyProvider } from './TechnologyContext'





export default function wrapContexts(props) {
    return (
        <>
            <TechnologyProvider>
                {props.children}
            </TechnologyProvider>

        </>
    )
}
