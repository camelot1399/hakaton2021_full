import {CardScroll, Group, CardGrid, View, Panel} from "@vkontakte/vkui";
import React from "react"
import {
  CardGameScroller,
  NewComponentMini,
  NewComponentsBig,
  NewComponentSearch,
  NewsComponent
} from '../../components';
import style from './style.css'

const fakeApi = [{}, {}, {}, {}, {}]

export const News = () => {

  return (<>
        <View activePanel={'news'}>
          <Panel id={'news'}>
            <CardGameScroller/>

            <NewComponentSearch/>

            <div className="wrap">
              <CardScroll size="s">
                {fakeApi.map((game, index) => <NewComponentMini key={index}/>)}
              </CardScroll>

              <NewComponentsBig/>

              <Group>
                <CardGrid size="l">
                  {fakeApi.map((game, index) => <NewsComponent key={index}/>)}
                </CardGrid>
              </Group>
            </div>
          </Panel>
        </View>

      </>

  )

}
