import React from 'react'
import {Logo} from './components/Logo'
import {Main} from './components/Main'
import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Logo /> 
      <Main />
    </div>
  );
}

export default App;
