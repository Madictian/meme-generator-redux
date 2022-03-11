import { configureStore } from "@reduxjs/toolkit";
import diceSlice from "./diceSlice";
import memeSlice from "./memeSlice";

const store = configureStore({
    reducer: {
        meme: memeSlice.reducer,
        dice: diceSlice.reducer,
    }
    
})

export default store;