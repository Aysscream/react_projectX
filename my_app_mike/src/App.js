import logo from './logo.svg';
import './App.css';
import {PureCompo,PureCompoProps} from './Components/PureCompo'
import StateCompo from './Components/StateCompo';
import { Component } from 'react';
import LifeCycleCompo from './Components/LifeCycleCompo';
import FilterGames from './Components/game/FilterGames';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {name:''};
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(val){
    this.setState({name: val})
  }
 arrayLabel =["foxtrot"]

 
 render(){
  const ARRAY_GAMES=[];
  ARRAY_GAMES.push({name:'Sekiro',category:'Adventure',stock:true,price:'55€'});
  ARRAY_GAMES.push({name:'Call of',category:'FPS',stock:true,price:'65€'});
  ARRAY_GAMES.push({name:'GTA 7',category:'adventure-action',stock:true,price:'40€'});
  ARRAY_GAMES.push({name:'Rainbow six',category:'FPS',stock:true,price:'35€'});
  ARRAY_GAMES.push({name:'battelField',category:'FPS',stock:false,price:'45€'});
  ARRAY_GAMES.push({name:'Zelda',category:'aventure',stock:false,price:'35€'});
  ARRAY_GAMES.push({name:'Uncharted 4',category:'adventure',stock:true,price:'40€'});
  ARRAY_GAMES.push({name:'Fifa 2021',category:'Sport',stock:true,price:'65€'});
  

    return (
      <div className="App">

        <header className="App-header">
          <StateCompo onInputChange={this.onInputChange}/>
          {this.arrayLabel.map((labelInArray) => {
                return <PureCompoProps key={labelInArray} label={labelInArray} fieldCompoState={this.state.name}/>
            })}
          <img src={logo} className="App-logo" alt="logo" />
                  <LifeCycleCompo/>
            {this.state.name ? <PureCompo/> : <div/>}
            <div>
            <FilterGames 
              games={ARRAY_GAMES}
            />
        </div>
        </header>
      </div>
    );
  }
  
}

export default App;
