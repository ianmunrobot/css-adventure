import React from 'react'
import { connect } from 'react-redux'

// CodeMirror code input and rules
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css.js'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/css-lint.js'
import 'codemirror/theme/solarized.css'

import './TextInput.css'

import { setStyles } from './redux/reducers/styleReducer'
import { runTests } from './testFunctions'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.customKeyMap = {
        'Cmd-Enter': (cm) => {
          this.handleSubmit()
          runTests(this.props.tests)
        },
      }
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
    if (e) e.preventDefault()
    this.props.setStyles(this.state.code)
  }

  render() {
    const codeMirrorOptions = {
      mode: 'css',
      keyMap: 'sublime',
      autoCloseBrackets: true,
      lineNumbers: true,
      gutters: ['CodeMirror-lint-markers'],
      lint: true,
      autofocus: true,
      extraKeys: this.customKeyMap,
      theme: 'solarized dark'
    }

    return(
      <div className="col-xs-8">
        <div className="main-form" onSubmit={this.handleSubmit}>
          <CodeMirror value={this.state.code} onChange={this.handleChange} options={codeMirrorOptions}/>
          <form className="buttonContainer">
            <button type="submit" className="submitCSS">add rule</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  rules: state.rules,
  tests: state.tests,
})

const mapDispatch = dispatch => ({
  setStyles: rule => {
    dispatch(setStyles(rule))
  },
})

export default connect(mapState, mapDispatch)(TextInput)