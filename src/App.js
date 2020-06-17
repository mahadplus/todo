import React, { Component } from 'react'
import './App.css'
import { observer } from 'mobx-react'
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'


@observer
class App extends Component {
  render() {
    return (
      <div>
        <div id="todoapp" className="todoapp">
          <TodoEntry />
          <TodoItems/>
        </div>
      </div>

    );

  }


}

export default App;
