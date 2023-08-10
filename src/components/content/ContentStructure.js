import React from "react"

export default function ContentStructure(props){

    return(
        <>
            <div className="Content">
                <div className="Container">
                    <div className="Container--Image">
                        <img src={props.img} alt="Location" width="80"/>
                    </div>
                    <div className="Container--Text">
                        <div className="Container--Text__Country"><h3 className="Country">{props.country}</h3><h4><a href={props.mapsLink} target="_blank">View on Google Maps</a></h4></div>
                        <h1 className="City">{props.city}</h1>
                        <h2 className="Date">{props.date}</h2>
                        <p className="Description">{props.description}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}