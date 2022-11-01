import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../redux/actions'
function Theme() {
    const theme = useSelector((state) => state.themeReducer)
    const dispatch = useDispatch()
  return (
    <div style={theme}>
        <button onClick={() =>dispatch(Actions.themeAction.koyu_tema())}>Koyu Tema</button>
        <button onClick={() =>dispatch(Actions.themeAction.acik_tema())}>Acik Tema</button>
    </div>
  )
}

export default Theme