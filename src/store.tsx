import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


//actions
export const addPins = (pinsList: any) => {
    return {
        type: "ADD_PINS",
        payload: pinsList
    }
};

export const addName = (name: string) => {
    return {
        type: "ADD_NAME",
        payload: name
    }
}

export const deletePins = (id: any) => {
    return {
        type: "DELETE_PINS",
        payload: id
    }
}



const initialState: any = {
    saved: []
}



const savedReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_PINS":
            return {
                ...state,
                saved: [action.payload, ...state.saved]
            }

        // case "ADD_NAME":
        //     return {
        //         ...state,
        //         name: [action.payload, ...state.name]
        //     }

        case "DELETE_PINS":
            return {
                ...state,
                saved: state.saved.filter((save: { id: any; }) => save.id != action.payload)
            }

        default:
            return state;
    }
}

export type RootState = ReturnType<typeof savedReducer>

const store = createStore(savedReducer, composeWithDevTools())

export default store;