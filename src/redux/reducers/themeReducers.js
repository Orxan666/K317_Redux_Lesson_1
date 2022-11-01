import actionTypes from "../actionTypes";


// const initialState = { backgroundColor: "red", height: "100vh", width: "100%" }
const lightTheme = { backgroundColor: "white", height: "100vh", width: "100%" }
const darkTheme = { backgroundColor: "black", height: "100vh", width: "100%" }

const themeReducer = ( state = darkTheme, action ) =>{
    switch (action.type) {
        case actionTypes.theme.ACIK_TEMA:
            return lightTheme
            
            
        case actionTypes.theme.KOYU_TEMA:
            return darkTheme
        default:
            return state;
    }
}
export default themeReducer 