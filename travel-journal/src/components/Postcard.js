import React from "react"
import "./postcard.css"

export default function Postcard({location, dates, info, googlePin, imgURL}){
  return (
    <section className="postcard">
      <img src={imgURL} alt={location.destination} className="postcard--img"/>
      <div className="info--section">
        <p className="p--country"><i class="fa-solid fa-location-dot"></i>{location.country} <a href="{googlePin}">View on Google Maps</a></p>
        <h3>{location.destination}</h3>
        <p className="dates">{dates}</p>
        <p>{info}</p>
      </div>
    </section>
  )
}