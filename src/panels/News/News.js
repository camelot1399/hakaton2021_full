import React from "react"
import {CardScroll, Group, CardGrid} from "@vkontakte/vkui";

import {CardGameScroller} from '../../components/plugins/cardGameScroller/cardGameScroller';

import classname from './News.css'
import {NewsComponent} from '../../components/plugins/newsComponent/newsComponent';
import {NewComponentMini} from '../../components/plugins/newsComponent/newsComponentMini/newComponentMini';
import {NewComponentsBig} from '../../components/plugins/newsComponent/newsComponentBig/newsComponentBig';
import {NewComponentSearch} from '../../components/plugins/newsComponent/newsComponentSearch/newsComponentSearch';

const fakeApi= [{},{},{},{},{}]

class PanelNews extends React.Component {
  render() {

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
}

export default PanelNews