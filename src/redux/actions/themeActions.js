import ActionTypes from '../actionTypes';

const acik_tema = (val) => {
    return {
        type: ActionTypes.theme.ACIK_TEMA, payload: val
    }
}
const koyu_tema = (val) => {
    return {
        type: ActionTypes.theme.KOYU_TEMA, payload: val
    }
}
const themeAction={
    acik_tema,
    koyu_tema
}

export default themeAction;
