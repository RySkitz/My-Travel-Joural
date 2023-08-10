import React from "react"
import CountriesData from "./CountriesData"
import ContentStructure from "./ContentStructure"

export default function Content(){
    const Elements = CountriesData.map(data => {
        return (
            <>
                <ContentStructure
                    key={data.key}
                    {...data}
                />
            </>
        )
    })
    
    return(
        <>
            {Elements}
        </>
    )
}