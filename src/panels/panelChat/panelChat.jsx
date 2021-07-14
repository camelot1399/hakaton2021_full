import {Panel, View} from '@vkontakte/vkui';
import React from "react"
import style from "./style.css"

export const PanelChat= () => {

  return (
      <View activePanel={'panelChat'}>
        <Panel id={'panelChat'}>
          <h1 className="chat" >Чат в разработке...</h1>
        </Panel>
      </View>
  )
}
