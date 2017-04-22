import { parseRuleToReactObject } from '../utils'

const initialState = []

export const ADD_RULE = 'ADD_RULE'

export const addRule = (rule) => {
  return {
    type: ADD_RULE,
    rule,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RULE:
      let newRule = parseRuleToReactObject(action.rule)
      return [...state, newRule]
    default:
      return state;
  }
}