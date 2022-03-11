
function MemePic({hover, meme}) {
  return (

    <div className="MemePic"  >

    <p className="pTop">
        {meme.topText}
    </p>
    <p className="pBottom">
            {meme.bottomText}
        </p>
    <img src={meme.image} alt="" className="pic" />

    
        
    </div>


    )
}

export default MemePic