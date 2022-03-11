import { createSlice } from "@reduxjs/toolkit";

const diceSlice = createSlice({
    name: 'dice',
    initialState: {
        diceList : [],
    },

    reducers: {
        fill(state, action){
            if(state.diceList.length === 0){

            for (let i = 0; i < 10; i++) {
                state.diceList = [...state.diceList, {
                    diceId: i,
                    diceValue: Math.floor(Math.random() * 6 + 1),
                    saved: false}]
                }}
        },

        reroll(state, action) {
            state.diceList = state.diceList.map((item) => {
                if(item.saved === false){
                    item.diceValue = Math.floor(Math.random() * 6 + 1)
                }
                return item
            })
        },
        
        save(state, action) {
            const id = action.payload;
            state.diceList[id].saved = !state.diceList[id].saved
        
        },

        reset(state, action) {
            state.diceList = state.diceList.map((item) => {
                item.diceValue = Math.floor(Math.random() * 6 + 1)
                item.saved = false
                return item
            }
                
            )
        },

    }
})

export const diceActions = diceSlice.actions;

export default diceSlice;