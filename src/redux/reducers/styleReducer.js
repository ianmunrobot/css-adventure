export const SET_STYLES = 'SET_STYLES'
export const ADD_STYLE = 'ADD_STYLE'

export const setStyles = (styles) => ({
    type: SET_STYLES,
    styles,
})

export const addStyle = style => ({
  type: ADD_STYLE,
  style
})

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STYLES:
      return action.styles
    case ADD_STYLE:
      return `${state}\n${action.style}`
    default:
      return state
  }
}