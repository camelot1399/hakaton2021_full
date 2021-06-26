import {getTournaments, getAllTournaments} from '../../store'
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"

export const Tournaments = () => {
  const { tournaments, error, pending } = useSelector(getTournaments())
  const dispatch = useDispatch()
  console.log(tournaments)



  useEffect(() => {
    dispatch(getAllTournaments())
  }, [dispatch, ])

  return (
    <>
      <h1>Tournaments</h1>
      {error ? <h1>{error}</h1> : null}
      {pending && !error ? (
        <h3>Обрабатывается fetch</h3>
      ) : (
        <ul>
          {tournaments?.map((item, index) => (
            <li key={index}>{item.slug}</li>
          ))}
        </ul>
      )}
    </>
  )
}
