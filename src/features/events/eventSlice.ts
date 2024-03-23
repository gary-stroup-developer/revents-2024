import { PayloadAction} from "@reduxjs/toolkit"
import { AppEvent} from "../../types"
import { GenericActions, GenericState, createGenericSlice } from "../../app/store/genericSlice"




type State = {
    data: AppEvent[]
}

const initialState: State = {
    data: []
}

export const eventSlice = createGenericSlice({
    name: 'events',
    initialState: initialState as GenericState<AppEvent[]>,
    reducers: {
        success: {
            reducer: (state, action: PayloadAction<AppEvent[]>) => {
                state.data = action.payload;
                state.status = 'finished';
            },
            prepare: (events) => {
                let eventArray: AppEvent[] = [];
                Array.isArray(events) ? eventArray = events : eventArray.push(events)
                const mapped = eventArray.map((e: any) => {
                    return { ...e, date: e.date.toDate().toISOString() }
                });
                return { payload: mapped }
            }
        }

    }
})

export const actions = eventSlice.actions as unknown as GenericActions<AppEvent[]>;

// createNewEvent: (state, action) => {
//     state.events.push(action.payload);
// },
// updateEvent: (state, action) => {
//     state.events[state.events.findIndex(evt => evt.id === action.payload.id)] = action.payload;
// },
// deleteEvent: (state, action) => {
//     state.events.splice(state.events.findIndex(evt => evt.id === action.payload.id), 1);
// }