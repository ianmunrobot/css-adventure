export const SET_TESTS = 'SET_TESTS'

export const setTests = (tests) => ({
  type: SET_TESTS,
  tests
})

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_TESTS:
      return action.tests
    default:
      return state
  }
}