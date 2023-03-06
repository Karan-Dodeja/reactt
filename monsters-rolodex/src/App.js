import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : { firstName: 'Karan', lastName: 'Dodeja'},
      company: 'self'
    }
  }

  render() {
return (
<div className="App">
      <header className="App-header">
        <p>
        Hi {this.state.name.firstName}, {this.state.name.lastName} , Work at {this.state.company}
        </p>
        <button onClick={() => {
          this.setState({name : { firstName: 'Karan 1', lastName: 'Dodeja 1'}})
        }}>Change Name</button>
      </header>
    </div>
)
  }
}

export default App;
