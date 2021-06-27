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
import PanelNews from './panels/News/News';

import {Provider} from 'react-redux';
import {Icon20CommentOutline, Icon20ShareOutline, Icon20ViewOutline} from "@vkontakte/icons";
import {Navigation} from './components/navigation/navigation';
import {Chat} from './panels/Chat/Chat';

export const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
  CHAT: 'chat'
};


const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.MATCHES);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

  }, []);

  const go = panel => {
    setActivePanel(panel);
    console.log(panel)
  };

  return (
    <Provider store={store}>
      <AdaptivityProvider>
        <AppRoot snoLegacyClasses >
          <View activePanel={activePanel}>
            <Panel id={ROUTES.MATCHES}>
              <PanelHeader>Киберспорт</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <Matches />
            </Panel>
            <Panel id={ROUTES.NEWS}>
              <PanelHeader>Киберспорт</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <PanelNews />
            </Panel>

            <Panel id={ROUTES.CHAT}>
              <PanelHeader>Киберспорт</PanelHeader>
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
