import React from "react"
import {Versus} from './versus';

export const UpcomingTournaments = (props) => {
  const {tournaments} = props

  return (
    <>
      <h2 className={'title'}>Ближайшие матчи</h2>
      {tournaments.map((tournament, index) => (
        <div key={index}>

          <h1 className="notice">Турнир: {tournament.league.name} {tournament.serie.full_name}</h1>
          <Versus tournament={tournament}/>
        </div>

      ))}
    </>
  )

}




