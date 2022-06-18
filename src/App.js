import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/card-list/search/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      seachField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
      (users) => {
        this.setState({monsters: users && users.length ? users : []});
      }
    );
  }

  handleChange = (e) => {
    this.setState({seachField: e.target.value});
  };

  render() {
    const { monsters, seachField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(seachField.toLowerCase());
    });

    return (
      <div className="App">

        <h1> Monsters Rollodex </h1>

        <img src={logo} alt='React Logo' className='App-logo'></img>

        <br></br>

        <SearchBox placeholder='Search monsters.' handleChange={this.handleChange}>
        </SearchBox>

        <hr></hr>
        <br></br>

        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  }
}

export default App;
