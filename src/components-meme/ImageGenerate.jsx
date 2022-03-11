
function ImageGenerate({click}) {
  return (

    <button className="generateImage" onClick={click}>
        <p>Get a new meme image</p>
        <img src="Troll-Face.png" alt="" />
    </button>

  )
}

export default ImageGenerate