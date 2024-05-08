
import { createSlice } from "@reduxjs/toolkit";

const webDetailsSlice = createSlice({
    name: 'webDetails',
    initialState: {
        webData: ''
    },
    reducers: {
        addWebDetails: (state, action) => {
            state.webData = action.payload
        }
    }
})

export const { addWebDetails } = webDetailsSlice.actions
export default webDetailsSlice.reducer;