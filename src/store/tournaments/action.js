import {
  GET_TOURNAMENTS_FAILURE,
  GET_TOURNAMENTS_START,
  GET_TOURNAMENTS_SUCCESS
} from "./type"

export const getTournamentsRequest = () => ({
  type: GET_TOURNAMENTS_START,
})

export const getTournamentsSuccess = (data) => ({
  type: GET_TOURNAMENTS_SUCCESS,
  payload: data,
})

export const getTournamentsFailure = (error) => ({
  type: GET_TOURNAMENTS_FAILURE,
  payload: error,
})

