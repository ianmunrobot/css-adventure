export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'

export const setPlayerName = (name) => ({
  type: SET_PLAYER_NAME,
  name
})

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return Object.assign(state, {
        name: action.name,
      })
    default:
      return state
  }
}