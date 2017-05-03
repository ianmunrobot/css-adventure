export const SET_CHALLENGE_TEXT = 'SET_CHALLENGE_TEXT'
export const ADD_CHALLENGE_TEXT = 'ADD_CHALLENGE_TEXT'

export const setChallengeText = (text) => ({
  type: SET_CHALLENGE_TEXT,
  text,
})

export const addChallengeText = (text) => ({
  type: ADD_CHALLENGE_TEXT,
  text,
})

export default (state = '', action) => {
  switch(action.type) {
    case SET_CHALLENGE_TEXT:
      return action.text
    case ADD_CHALLENGE_TEXT:
      return `${state}\n${action.text}`
    default:
      return state
  }
}