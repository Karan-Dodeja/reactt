import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : 'Karan'
    }
  }

  render() {
return (
<div className="App">
      <header className="App-header">
        <p>
          Hi {this.state.name}
        </p>
        <button onClick={() => {
          this.setState({name : 'Karan 1'})
        }}>Change Name</button>
      </header>
    </div>
)
  }
}

export default App;
