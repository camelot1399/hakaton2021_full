const initialState = {
  gameCard: [{
    name: "CS:GO",
    img:"https://img.icons8.com/ios-filled/50/000000/counter-strike-source.png"
  }, {
    name: "Dota2",
    img:"https://img.icons8.com/color/50/000000/dota.png"
  },
    {
      name: "Apex",
      img:"https://img.icons8.com/color/50/000000/apex-legends.png"
    },
    {
      name: "PUBG",
      img:"https://img.icons8.com/color/50/000000/pubg.png"
    }, {
      name: "LOL",
      img:"https://img.icons8.com/ios/50/000000/league-of-legends.png"
    },
    {
      name: "Fortnite",
      img:"https://img.icons8.com/color/50/000000/fortnite.png"
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