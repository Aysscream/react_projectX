import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps} from './Components/PureCompo'
import StateCompo from './Components/StateCompo';
import { Component } from 'react';
import LifeCycleCompo from './Components/LifeCycleCompo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:''};
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(val){
    this.setState({name: val})
  }
 arrayLabel =["foxtrot","zoulou","tango"]
 
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LifeCycleCompo/>
          <p>
          ReacTBoy ;) Edit <code>src/App.js</code> and save to reload.
          </p>
            {this.arrayLabel.map((labelInArray) => {
                return <PureCompoProps key={labelInArray} label={labelInArray} fieldCompoState={this.state.name}/>
            })}
            
            {this.state.name ? <PureCompo/> : <div/>}
            
            
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
