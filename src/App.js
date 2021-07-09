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



import {Provider, useDispatch, useSelector} from 'react-redux';
import {Navigation} from './components';
import {Match, Chat, Matches, PanelNews} from './panels';
import {getActivePanel,sendActivePanel} from './store';

export const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
  CHAT: 'chat'
};


const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.MATCHES);

  const dispatch = useDispatch()

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    dispatch(sendActivePanel(activePanel))

  }, []);

  const go = panel => {
    setActivePanel(panel);
  };

  const { activePanelReducer } = useSelector(getActivePanel())



  return (
      <AdaptivityProvider>
        <AppRoot >
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

            <Panel id={ROUTES.MATCH}>
              <PanelHeader>Киберспорт</PanelHeader>
              <Navigation go={go} ROUTES={ROUTES}/>
              <Match />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
  );
}

export default App;
