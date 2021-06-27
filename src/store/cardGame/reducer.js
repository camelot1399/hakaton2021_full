const initialState = {
  gameCard:[{
    name:"CS GO"
  },{
    name:"Dota2"
  }]
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const gameCardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}