import { createSlice } from "@reduxjs/toolkit"
import { sampleData } from "../../assets/Snippets/sampleData"

type State = {
    events: AppEvent[]
}

const initialState: State = {
    events: sampleData
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        
    }
})