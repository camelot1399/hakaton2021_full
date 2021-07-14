import bridge from '@vkontakte/vk-bridge';
import {
  AdaptivityProvider,
  AppRoot,
  PanelHeader,
} from '@vkontakte/vkui';
import React, {useState, useEffect} from 'react';
import '@vkontakte/vkui/dist/vkui.css';


import {Provider, useDispatch, useSelector} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './components';
import {PanelChat, PanelMatches, PanelNews} from './panels';
import {getActivePanel, sendActivePanel} from './store';

export const ROUTES = {
  MATCHES: 'matches',
  NEWS: 'news',
  MATCH: 'match',
  CHAT: 'panelChat'
};


const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.MATCHES);

  const dispatch = useDispatch()

  useEffect(() => {
    bridge.subscribe(({detail: {type, data}}) => {
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

  const {activePanelReducer} = useSelector(getActivePanel())


  return (
      <BrowserRouter>
        <AdaptivityProvider>
          <AppRoot>
            <Route path={['/:params', '/']}>
              <PanelHeader>Киберспорт</PanelHeader>
              <Navigation/>
            </Route>
            <Switch>
              <Route path={'/chat'}>
                <PanelChat/>
              </Route>
              <Route path={'/news'}>
                <PanelNews/>
              </Route>
              <Route path={['/matches', '/matches&:game']}>
                <PanelMatches/>
              </Route>
            </Switch>
          </AppRoot>
        </AdaptivityProvider>
      </BrowserRouter>
  );
}

export default App;
