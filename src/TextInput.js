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
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/css-lint.js'

import { setRules } from './redux/reducers/ruleReducer'
import { runTests } from './testFunctions'
import { rulesheetToStyleObjects } from './redux/parseUtils'

// http://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript
(function() {
    var node = document.createElement('style')
    document.body.appendChild(node)
    window.addStyleString = function(str) {
        node.innerHTML = str
    }
}())

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.customKeyMap = {
        'Cmd-Enter': (cm) => {
          this.handleSubmit()
          runTests(this.props.tests)
        }
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
    let matches = rulesheetToStyleObjects(this.state.code)
    if (matches) {
      // this.props.setRules(matches)
      window.addStyleString(this.state.code)
    }
  }

  render() {
    const codeMirrorOptions = {
      mode: 'css',
      keyMap: 'sublime',
      autoCloseBrackets: true,
      lint: true,
      gutters: ["CodeMirror-lint-markers"],
      autofocus: true,
      extraKeys: this.customKeyMap,
    }

    return(
      <div className="main-form" onSubmit={this.handleSubmit}>
        <form>
          {/*<textarea name="cssInput" />*/}
          <button type="submit">add rule!</button>
        </form>
        <CodeMirror style={{'text-align': 'left'}}value={this.state.code} onChange={this.handleChange} options={codeMirrorOptions}/>
      </div>
    )
  }
}

const mapState = state => ({
  rules: state.rules,
  tests: state.tests,
})

const mapDispatch = dispatch => ({
  setRules: rule => {
    dispatch(setRules(rule))
  },
})

export default connect(mapState, mapDispatch)(TextInput)