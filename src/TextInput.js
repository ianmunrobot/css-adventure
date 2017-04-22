import React from 'react'
import { connect } from 'react-redux'
import './TextInput.css'

// CodeMirror code input and rules
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css.js'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/edit/closebrackets.js'

import { addRule } from './redux/reducers/ruleReducer'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    }
  }

  handleChange = (code) => {
    this.setState({
      code
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRule(this.state.code)
    this.setState({
      code: ''
    })
  }

  render() {
    return(
      <div className="main-form" onSubmit={this.handleSubmit}>
        <form>
          {/*<textarea name="cssInput" />*/}
          <button type="submit">add rule!</button>
        </form>
        <CodeMirror style={{ 'text-align': 'left'}}value={this.state.code} onChange={this.handleChange} options={{mode: 'css', keyMap: 'sublime', autoCloseBrackets: true,}}/>
      </div>
    )
  }
}

const mapState = state => ({
  rules: state.rules,
})

const mapDispatch = dispatch => ({
  addRule: rule => {
    dispatch(addRule(rule))
  }
})

export default connect(mapState, mapDispatch)(TextInput)