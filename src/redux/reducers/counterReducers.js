import actionTypes from "../actionTypes";

const initialState = 0

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.count.SAYI_ARTTIR:
            return state + 1
        case actionTypes.count.SAYI_AZALT:
            return state - 1
        default:
            return state
    }

}


export default countReducer
