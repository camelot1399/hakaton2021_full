import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {request} from '../api'
import {activePanelReducer} from './activePanel';
import {gameCardReducer} from './cardGame';
import {logger} from './middleware';
import {tournamentsReducer} from "./tournaments"


const reducers = combineReducers({
  tournamentsReducer,
  gameCardReducer,
  activePanelReducer
})

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(request), logger),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args,
    ),
)
