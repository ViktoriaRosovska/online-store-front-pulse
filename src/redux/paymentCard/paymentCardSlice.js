import { createSlice } from "@reduxjs/toolkit";

export const paymentCardSlice = createSlice({
    name: 'paymentCard',
    initialState: {
        selectedCard: null,
    },
    reducers: {
        selectCard: (state, action) => {
            state.selectedCard = action.payload
        },
        deselectCard: state => {
            state.selectedCard = null
        }
    }
})

export const {selectCard, deselectCard} = paymentCardSlice.actions

export default paymentCardSlice.reducer