export const SET_CURRENT_CHALLENGE = 'SET_CURRENT_CHALLENGE'

export const setChallenge = (challenge) => ({
  type: SET_CURRENT_CHALLENGE,
  challenge,
})

const initialState = () => (null)

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_CHALLENGE:
      return action.challenge
    default:
      return state
  }
}