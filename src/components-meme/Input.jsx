import ImageGenerate from "./ImageGenerate"


function Input({click, type}) {
  return (
    <div className="Input">

        <form>
        <input id="tTop" type="text" placeholder="Shut UP" onChange={type} />

        <input id="tBot" type="text" placeholder="And take my money" onChange={type}/>

        <ImageGenerate click={click} />
        </form>

        

    </div>
  )
}

export default Input