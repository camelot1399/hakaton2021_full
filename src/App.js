import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  Panel, PanelHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {store} from "./store"

import Matches from './panels/Matches/Matches';
import Match from './panels/Matches/Match/Match';
import {News} from './panels/News/News';

import {Provider} from 'react-redux';
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";
import {Navigation} from './components/navigation/navigation';
import {Chat} from './panels/Chat/Chat';

const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
  CHAT: 'chat'
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
        <AppRoot embedded snoLegacyClasses style={{paddingLeft: '10px', paddingRight: '10px', width: '375px', marginBottom: '50px'}} >
          <View activePanel={activePanel}>
            <Panel id={ROUTES.MATCHES}>
              <PanelHeader>Матчи</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <Matches />
            </Panel>
            <Panel id={ROUTES.NEWS}>
              <PanelHeader>Новости</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <News />
            </Panel>
            <Panel id={ROUTES.MATCH}>
              <PanelHeader>Матч</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <Match />
            </Panel>
            <Panel id={ROUTES.CHAT}>
              <PanelHeader>Чат</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <Chat/>
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </Provider>
  );
}

export default App;
