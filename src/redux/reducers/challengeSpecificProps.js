export const SET_CURRENT_CHALLENGE_PROPS = 'SET_CURRENT_CHALLENGE_PROPS'
export const ADD_CURRENT_CHALLENGE_PROPS = 'ADD_CURRENT_CHALLENGE_PROPS'

export const setChallengeProps = (props) => ({
  type: SET_CURRENT_CHALLENGE_PROPS,
  props,
})

export const addChallengeProps = (props) => ({
  type: SET_CURRENT_CHALLENGE_PROPS,
  props,
})

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_CHALLENGE_PROPS:
      return action.props
    case ADD_CURRENT_CHALLENGE_PROPS:
      return Object.assign(state, action.props)
    default:
      return state
  }
}