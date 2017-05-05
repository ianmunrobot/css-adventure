export const SET_STYLES = 'SET_STYLES'

export const setStyles = (styles) => ({
    type: SET_STYLES,
    styles,
})

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLES:
      return action.styles
    default:
      return state
  }
}