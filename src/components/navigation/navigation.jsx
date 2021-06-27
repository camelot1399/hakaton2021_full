import React from "react"
import {Tabs, TabsItem} from '@vkontakte/vkui';
import './navigation.css'

export const Navigation = (props) => {
  const {ROUTES, go } = props

  return (
      <>
        <Tabs style={{marginBottom: '25px'}}>
          <TabsItem
              className="tabs"
              go={ROUTES.NEWS}
              onClick={() => go(ROUTES.NEWS)}
          >
            Новости
          </TabsItem>
          <TabsItem
              className="tabs"
              go={ROUTES.MATCHES}
              onClick={() => go(ROUTES.MATCHES)}
          >
            Матчи
          </TabsItem>
          <TabsItem
              className="tabs"
              go={ROUTES.CHAT}
              onClick={() => go(ROUTES.CHAT)}
          >
            Чат
          </TabsItem>
          <TabsItem
            className="tabs"
            go={ROUTES.MATCH}
            onClick={() => go(ROUTES.MATCH)}
          >
            Тест Матч
          </TabsItem>
        </Tabs>
      </>
  )
}
