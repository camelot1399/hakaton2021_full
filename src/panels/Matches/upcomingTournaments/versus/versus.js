import React from "react"

export const Versus = (props) => {
  const {tournament } = props



  return (
      <>
        {tournament.matches.map((matches, index) => {
          if(index < 6){
            const nameCommand = matches.name.split(' ')

            return (
                <div key={index} className="tourneys">
                  <a href="#" class="tourneys__a">
                    <div className="tourneys__imgs">
                      <img width="50" src="https://www.pngjoy.com/pngm/306/5771824_cs-go-logo-logos-team-gamers-png-transparent.png" alt="" />
                      <img width="50" src="https://i.pinimg.com/originals/24/34/6d/24346d3c0109b31407886794f57f5ae5.png" alt="" />
                    </div>

                    <div className="tourneys__teams">
                      {nameCommand.map((Command, index) => (
                          <div key={index}>{Command}</div>
                      ))}

                    </div>

                    <div className="blockNotification live">LIVE</div>
                  </a>
                </div>
            )
          }else {
            return null
          }
        })}
      </>
  )
}