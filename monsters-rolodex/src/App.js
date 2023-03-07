import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    console.log('constructor Call')
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    console.log('fetch Call')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    },
    )
  }

  render() {
    console.log('render Call')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filterMethod = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <div className="App">
        <input type="search" className="searchBox" placeholder='Searh Monsters' onChange={onSearchChange} />
        {
          filterMethod.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div >
    )
  
  }
}
export default App;