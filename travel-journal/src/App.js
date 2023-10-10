import React from "react"
import Navbar from "./components/Navbar"
import Postcard from "./components/Postcard"
import data from "./data.js"
import "./app.css"

export default function App(){
  
  const buildData = data.map(el => {
    return <Postcard
        key={el.id}
        {...el}
      />
  });
  return (
    <div>
      <Navbar />
      <div className="postcard--container">{buildData}</div>
    </div>
  )
}