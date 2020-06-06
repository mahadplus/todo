import React from 'react'
import './App.css'
import store from './store'
import {observer} from 'mobx-react'


@observer
function App() {
  return (
    <div className="App">
      {store.time.toLocaleTimeString()}
    </div>
  );
}

export default App;
