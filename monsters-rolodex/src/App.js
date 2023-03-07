import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {

      monsters: [
        {
          id: '1',
          name: 'Karan'
        },
        {
          id: '2',
          name: 'Karan 1'
        },
        {
          id: '3',
          name: 'Karan 2'
        },
        {
          id: '4',
          name: 'Karan 3'
        }
      ],

    };

  }

  render() {
    return (
      <div className="App">

        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div >
    )
  }
}
export default App;
