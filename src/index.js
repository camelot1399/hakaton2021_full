import "core-js/features/map"
import "core-js/features/set"
import bridge from "@vkontakte/vk-bridge";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {App} from "./App";
import {store} from './store';

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./App")
}
