import {CardScroll, Group, CardGrid, View, Panel} from "@vkontakte/vkui";
import React from "react"

import {
  CardGameScroller,
  NewComponentMini,
  NewComponentsBig,
  NewComponentSearch,
  NewsComponent
} from '../../components';
import style from './News.css'

const fakeApi = [{}, {}, {}, {}, {}]

export const PanelNews = () => {

  return (<>
        <View activePanel={'news'}>
          <Panel id={'news'}>
            <CardGameScroller/>

            <NewComponentSearch/>

            <div className="wrap">
              <CardScroll size="s">
                {fakeApi.map((game, index) => <NewComponentMini/>)}
              </CardScroll>

              <NewComponentsBig/>

              <Group>
                <CardGrid size="l">
                  {fakeApi.map((game, index) => <NewsComponent/>)}
                </CardGrid>
              </Group>
            </div>
          </Panel>
        </View>

      </>

  )

}
