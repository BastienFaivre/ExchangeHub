const initialState = {
    current: 0,
    history: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "INCREMENT": {
            return {
                current: state.current + 1,
                history: [...state.history, state.current],
            }
        }
        case "DECREMENT": {
            return {
                current: state.current - 1,
                history: [...state.history, state.current],
            }
        }
        case "RESET": {
            return initialState
        }
        default:
            return state
    }
}
