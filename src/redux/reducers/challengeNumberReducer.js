export const SET_CHALLENGE_NUMBER = 'SET_CHALLENGE_NUMBER'

export const setChallengeNumber = challenge => ({
  type: SET_CHALLENGE_NUMBER,
  challenge
})

export default (state = 1, action) => {
  switch(action.type) {
    case SET_CHALLENGE_NUMBER:
      return action.challenge
    default:
      return state
  }
}