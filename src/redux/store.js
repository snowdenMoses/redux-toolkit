import {configureStore} from "@reduxjs/toolkit"
import getAllStates from "./allStatesSlice"

const store = configureStore({
    reducer: {getAllStates}
})

export default store;