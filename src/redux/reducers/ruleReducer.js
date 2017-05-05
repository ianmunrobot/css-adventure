export const SET_RULES = 'SET_RULES'

export const setRules = (rules) => ({
    type: SET_RULES,
    rules,
})

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RULES:
      return action.rules
    default:
      return state
  }
}