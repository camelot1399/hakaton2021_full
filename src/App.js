import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  Panel,
  PanelHeader,
  Group,
  Tabs,
  TabsItem, SizeType
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {store} from "./store"

import Matches from './panels/Matches/Matches';
import Match from './panels/Matches/Match/Match';
import News from './panels/News/News';

import {Provider} from 'react-redux';
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";

const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
};


const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.MATCH);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);


  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <Provider store={store}>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            <Panel id="matches">
              <Group>
                <Tabs>
                  <TabsItem
                    go={ROUTES.NEWS}
                  >
                    Новости
                  </TabsItem>
                  <TabsItem
                    go={ROUTES.MATCHES}
                    route={ROUTES.MATCHES}
                  >
                    Матчи
                  </TabsItem>
                  <TabsItem
                  >
                    Матч
                  </TabsItem>
                </Tabs>

              </Group>
              <News />
              <Matches />
            </Panel>
            <Panel id="news">
              <Group>
                <Tabs>
                  <TabsItem

                  >
                    Новости
                  </TabsItem>
                  <TabsItem
                  >
                    Матчи
                  </TabsItem>
                  <TabsItem
                  >
                    Чат
                  </TabsItem>
                </Tabs>

              </Group>
              <News />
            </Panel>
            <Panel id="match">
              <Group>
                <Tabs>
                  <TabsItem

                  >
                    Новости
                  </TabsItem>
                  <TabsItem
                  >
                    Матчи
                  </TabsItem>
                  <TabsItem
                  >
                    Чат
                  </TabsItem>
                </Tabs>

              </Group>
              <Match />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </Provider>
  );
}

export default App;
