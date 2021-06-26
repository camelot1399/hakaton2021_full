import {
  getTournamentsFailure,
  getTournamentsRequest,
  getTournamentsSuccess
} from "./action"
import api from "../../api/api.json"

const API_URL_PUBLIC = "https://api.pandascore.co/tournaments?token=G3c07FxOzSESI6vO96uIEUBeOInSEF_bkWGvT1t-e7TD_BZ1G3k"
/*const API_URL_PUBLIC = "https://api.github.com/gists/public?page20&per_page=5"*/


export const getAllTournaments = () => async (dispatch) => {
  dispatch(getTournamentsRequest())

  try {
    const result = api
/*
    const res = await fetch(API_URL_PUBLIC)
    const result = await res.json()*/

    dispatch(getTournamentsSuccess(result))
  } catch (error) {
    console.log(error)
    dispatch(getTournamentsFailure(error.message))
  }
}

