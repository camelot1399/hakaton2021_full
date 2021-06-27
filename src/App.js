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
import {News} from './panels/News/News';

import {Provider} from 'react-redux';
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";
import {Navigation} from './components/navigation/navigation';

const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
};


const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.MATCHES);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);


  const go = panel => {
    setActivePanel(panel);
    console.log(panel)
  };

  return (
    <Provider store={store}>
      <AdaptivityProvider>
        <AppRoot>
          <View activePanel={activePanel}>
            <Panel id="matches">
              <Navigation go={go} ROUTES={ROUTES}/>
              <Matches />
            </Panel>
            <Panel id="news">
              <Navigation go={go} ROUTES={ROUTES}/>
              <News />
            </Panel>
            <Panel id="match">
              <Navigation go={go} ROUTES={ROUTES}/>
              <Match />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </Provider>
  );
}

export default App;
