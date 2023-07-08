import { createSlice } from "@reduxjs/toolkit"

const getAllStates = createSlice({
    name: "allStates",
    initialState: {
        ingredients: []
    },
    reducers: {
        // setShowAssociateModal: (state) => {state.showAssociateModal = "State After Action Was Applied"},
        setIngredients: (state, action) => {
            state.ingredients = [...state.ingredients, action.payload]
        },
        //If You use a curly bracket an Imer error will be thrown, this is because the expression gets returned without a curly bracket
    }
})

export const {setIngredients} = getAllStates.actions
export default getAllStates.reducer