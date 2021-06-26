import {
  GET_TOURNAMENTS_FAILURE,
  GET_TOURNAMENTS_START,
  GET_TOURNAMENTS_SUCCESS,
} from "./type"

export const initialState = {
  tournaments: [],
  error: null,
  pending: false,
}

export const tournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOURNAMENTS_START:
      return {
        ...state,
        pending: true,
      }
    case GET_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        tournaments: action.payload,
        error: null,
        pending: false,
      }
    case GET_TOURNAMENTS_FAILURE:
      return {
        ...state,
        tournaments: [],
        error: action.payload,
        pending: false,
      }
    default:
      return state
  }
}
