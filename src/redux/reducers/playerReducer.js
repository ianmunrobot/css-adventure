export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'

export const setPlayerName = (name) => ({
  action: SET_PLAYER_NAME,
  name
})

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_NAME:
      return action.name
    default:
      return state
  }
}