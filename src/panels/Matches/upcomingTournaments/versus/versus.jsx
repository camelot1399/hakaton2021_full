import React from "react"
import {
  Icon24NotificationOutline
} from "@vkontakte/icons";

export const Versus = (props) => {
  const {tournament, setActiveModal} = props

  return (
    <>
      {tournament.matches.map((matches, index) => {
        const nameCommand = matches.name.split(' ')

        if (index < 6) {
          return (
            <div key={index} className="tourneys" >
              <a href="#" className="tourneys__a">
                <div className="tourneys__imgs">
                  <img width="50"
                       src="https://www.pngjoy.com/pngm/306/5771824_cs-go-logo-logos-team-gamers-png-transparent.png"
                       alt=""/>
                  <img width="50" src="https://i.pinimg.com/originals/24/34/6d/24346d3c0109b31407886794f57f5ae5.png"
                       alt=""/>
                </div>

                <div className="tourneys__teams" onClick={() => setActiveModal(`game${index}`)}>
                  {nameCommand.map((Command, index) => (
                    <div key={index}>{Command}</div>
                  ))}

                </div>
                {(index < 4) ?
                  <div className="blockNotification live">LIVE</div>
                  :
                  <div className="blockNotification remindMe"><Icon24NotificationOutline width="14"
                                                                                         height="14"/> Напомнить</div>}
              </a>
            </div>
          )
        } else {
          return null
        }
      })}
    </>
  )
}
