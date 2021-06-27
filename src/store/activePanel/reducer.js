import {SEND_ACTIVE_PANEL} from './type';


const initialState = {
  activePanelReducer:'test'
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    console.log(initialState)
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const activePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ACTIVE_PANEL:
      return {
        ...state,
        activePanelReducer: action.payload,
      }

    default:
      return state
  }
}