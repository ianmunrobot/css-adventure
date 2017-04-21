import React from 'react'
import './TextInput.css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/css/css.js'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/comment/comment.js'
import 'codemirror/addon/edit/closebrackets.js'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    }
  }

  handleChange = (code) => {
    // e.preventDefault();
    this.setState({
      code
    })
  }

  render() {
    return(
      <div className="main-form">
        <form>
          {/*<textarea name="cssInput" />*/}
          <button type="submit">add rule!</button>
        </form>
        <CodeMirror value={this.state.code} onChange={this.handleChange} options={{mode: 'css', keyMap: 'sublime', autoCloseBrackets: true,}}/>
      </div>
    )
  }
}

export default TextInput;