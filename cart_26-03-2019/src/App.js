import React, { Component } from 'react';
import './App.css';
import CartManager from './components/container/CartManager';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Cart</h1>
        <CartManager/>
      </div>
    );
  }
}

export default App;
