import React from "react"
import {Card} from '@vkontakte/vkui';

export const CardGame = (props) => {
  const {gameName, imgProp} = props


  return (
      <Card style={{width: '150px'}}>
        <div className="game">
          <span>{gameName}</span>
          <img
              src={imgProp}
              alt=""
              width="30"
          height="30"/>
        </div>
      </Card>
  )
}