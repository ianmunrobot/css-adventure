export const SET_CHALLENGE_TEXT = 'SET_CHALLENGE_TEXT'

export const setChallengeText = (text) => ({
  type: SET_CHALLENGE_TEXT,
  text
})

export default (state = 'hi there', action) => {
  switch(action.type) {
    case SET_CHALLENGE_TEXT:
      return action.text
    default:
      return state
  }
}