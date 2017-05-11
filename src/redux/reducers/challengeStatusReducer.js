export const SET_CHALLENGE_STATUS = 'SET_CHALLENGE_STATUS'

export const setChallengeStatus = status => ({
  type: SET_CHALLENGE_STATUS,
  status,
})

const initialState = 'incomplete'

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHALLENGE_STATUS:
      return action.status
    default:
      return state
  }
}