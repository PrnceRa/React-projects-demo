import React from "react"

import MountainBike from "../images/mountain-bike.svg"
import WeddingPhoto from "../images/wedding-photography.svg"
import Katiezeferes from "../images/katie-zeferes.png"
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    let coverImg
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    if (props.coverImg === "mountain"){
        coverImg = MountainBike
    }else if (props.coverImg === "wedding-photography.png"){
        coverImg = WeddingPhoto
    }else{
        coverImg = Katiezeferes
    }
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={coverImg} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}