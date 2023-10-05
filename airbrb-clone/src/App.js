import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./App.css"
import dataArr from "./data.js"

export default function App() {
    
    const cardData = dataArr.map(el => {
        return <Card 
        key={el.id}
        {...el}
        />
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card--container">{cardData}</div>
        </div>
    )
}