import thunk from "redux-thunk"
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {tournamentsReducer} from "./tournaments"
import {request} from '../api'
import {logger} from './middleware';


const reducers = combineReducers({
  tournamentsReducer: tournamentsReducer,
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