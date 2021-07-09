import React from "react"
import {CardScroll, Group, CardGrid} from "@vkontakte/vkui";

import {CardGameScroller, NewComponentMini, NewComponentsBig, NewComponentSearch, NewsComponent} from '../../components';
import style from './News.css'

const fakeApi= [{},{},{},{},{}]

export const PanelNews = () => {

    return (
      <>
        <CardGameScroller/>

        <NewComponentSearch/>
        
        <div className="wrap">
          <CardScroll size="s" >
            {fakeApi.map((game, index) => <NewComponentMini/>)}
          </CardScroll>

          <NewComponentsBig/>

          <Group>
            <CardGrid size="l">
              {fakeApi.map((game, index) => <NewsComponent/>)}
            </CardGrid>
          </Group>
        </div>
      </>
    )

}