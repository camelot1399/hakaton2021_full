import React from "react"
import {Card} from '@vkontakte/vkui';
import {useSelector} from "react-redux";
import {getActivePanel} from "../../../../store/activePanel";

export const CardGame = (props) => {
  const {gameName, imgProp} = props
  const {activePanelReducer} = useSelector(getActivePanel())

  return (
    <Card
      style={{width: '150px'}}
    >
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
