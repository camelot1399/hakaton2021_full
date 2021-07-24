import {Panel, View} from '@vkontakte/vkui';
import React from "react"
import style from "./style.css"

export const ChatPanel= () => {

  return (
      <View activePanel={'chat'}>
        <Panel id={'chat'}>
          <h1 className={style.chat} >Чат в разработке...</h1>
        </Panel>
      </View>
  )
}
