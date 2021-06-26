import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {store} from "./store"

import Home from './panels/Home';
import {Provider} from 'react-redux';

const ROUTES = {
  HOME: 'home',
};

const STORAGE_KEYS = {
  STATUS: 'status',
};

const App = () => {
  const [activePanel, setActivePanel] = useState(ROUTES.HOME);
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);

  useEffect(() => {
    bridge.subscribe(({detail: {type, data}}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });

    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }

    fetchData();
  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };


  return (
      <Provider store={store}>
        <AdaptivityProvider>
          <AppRoot>
            <View activePanel={activePanel}>
              <Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go}/>
            </View>
          </AppRoot>
        </AdaptivityProvider>
      </Provider>
  );
}

export default App;
