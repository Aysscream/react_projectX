import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps} from './Components/PureCompo'
import StateCompo from './Components/StateCompo';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:''};
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(val){
    console.log('state=', this.state.name);
    this.setState({name: val})
    console.log('valeur Oninput: '+ val);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          ReacTBoy ;) Edit <code>src/App.js</code> and save to reload.
          </p>
            <PureCompo/>
            <PureCompoProps label="zoulou" fieldCompoState={this.state.name}/>
            <StateCompo onInputChange={this.onInputChange} label="Issou" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
