import React from "react"
import {Tabs, TabsItem} from '@vkontakte/vkui';

export const Navigation = (props) => {
  const {ROUTES, go } = props
  return (
      <>
        <Tabs>
          <TabsItem
              go={ROUTES.NEWS}
              onClick={() => go(ROUTES.NEWS)}
          >
            Новости
          </TabsItem>
          <TabsItem
              go={ROUTES.MATCHES}
              onClick={() => go(ROUTES.MATCHES)}
          >
            Матчи
          </TabsItem>
          <TabsItem
              go={ROUTES.CHAT}
              onClick={() => go(ROUTES.CHAT)}
          >
            Чат
          </TabsItem>
        </Tabs>
      </>
  )
}