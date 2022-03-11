import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const memeSlice = createSlice({
    name: 'meme',
    initialState: {
        image: "https://i.imgflip.com/46e43q.png",
        topText : "Shut up",
        bottomText : "and take my money!",
        listOfMemes: [],
      },

    reducers: {
      fetchMeme(state, action){
        state.listOfMemes = action.payload.map(item => {return item})
        
      },

      newMeme(state,action){
        
          state.image = action.payload.image
          state.topText = action.payload.topText
          state.bottomText =  action.payload.bottomText
          state.listOfMemes = [...state.listOfMemes]
        

      }
    }
})

export const memeActions = memeSlice.actions;

export const getMemeThunk = () => async (dispatch) => {
  try{
    const response = await axios.get('https://api.imgflip.com/get_memes')
    console.log('success')
    console.log(response.data.data.memes)
    dispatch(memeActions.fetchMeme(response.data.data.memes))

  }catch(err){
    console.log(err)
  }
}





export default memeSlice;