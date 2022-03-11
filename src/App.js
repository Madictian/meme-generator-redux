import { useEffect } from 'react';
import './App.css';
import Header from './components-meme/Header';
import Input from './components-meme/Input';
import MemePic from './components-meme/MemePic';
import { useDispatch, useSelector } from 'react-redux';
import  { getMemeThunk, memeActions } from './store/memeSlice';



function App() {
  const memes = useSelector(state => state.meme)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemeThunk())
  },[dispatch])

  
function click(e){
  e.preventDefault();

  const top = document.getElementById("tTop").value === '' ? 'Shut up' : document.getElementById("tTop").value
  const bottom = document.getElementById("tBot").value === '' ? 'And take my money' : document.getElementById("tBot").value


  dispatch(memeActions.newMeme({ 
    image : memes.listOfMemes[Math.floor(Math.random() * memes.listOfMemes.length)].url,
    topText : top,
    bottomText : bottom,
}))
  

};

function type(){
  dispatch(memeActions.newMeme( 
    {...memes,
    topText : document.getElementById("tTop").value,
    bottomText : document.getElementById("tBot").value,}
))


}



return (
    <div className="App">

        <Header />
        <Input click={click} type={type} />
        <MemePic  meme={memes} />


    </div>
  );
}

export default App;
