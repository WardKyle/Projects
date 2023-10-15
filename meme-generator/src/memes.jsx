import React, {useEffect} from "react"

function BuildMeme() {

  const [allMemes, setMemes] = React.useState()
  const [memeURL, setMemeURL] = React.useState([])
  const [memeText, setMemeText] = React.useState({topText:"",
bottomText:""})
const [fontColor, toggleFontColor] = React.useState(true)
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      const pos = Math.ceil(Math.random() * data.data.memes.length)
      setMemes(data.data.memes)
      setMemeURL(data.data.memes[pos].url)
    })
  },[])

  function handleChange(event) {
    const {name,value} = event.target;
    setMemeText(prevState => ({
      ...prevState, [name]: value
    }))
  }
  function newMeme() {
    const pos = Math.ceil(Math.random() * allMemes.length)
    console.log(pos)
    setMemeURL(allMemes[pos].url)
  }

  function textToggle(){
    toggleFontColor(prevState => !prevState)
  }

  return (
    <main>
        <form>
          <input type="text" name="topText" placeholder="Top meme text" id="top--text" onChange={handleChange}></input>
          <input type="text" name="bottomText" placeholder="Bottom meme text" id="bottom--text" onChange={handleChange}></input>
        </form>
        <button id="form--button" onClick={newMeme}>Get new meme image</button>
        <button id="text--toggle" onClick={textToggle}>Toggle Font Color</button>
        <div id="meme--container">
          <h1 id="top" style={{
            color: fontColor ? "white" : "black"
          }}>{memeText.topText}</h1>
          <h1 id="bottom" style={{
            color: fontColor ? "white" : "black"
          }}>{memeText.bottomText}</h1>
          <img src={memeURL}/>
        </div>
    </main>
  )
}

export default BuildMeme