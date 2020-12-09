/**
 * @author Ayss
 * License
 * Pure component review
 */
import React,{Component} from 'react';
import './StateCompo.css';

class StateCompo extends Component{
    constructor(props){
        super(props)
        this.state ={name:''}
    }
    componentWillReceiveProps(){
        console.log(`t'a recu un props:`,this.props);
    }
    handleChange = event => {
       this.setState({name: event.target.value})
       this.props.onInputChange(event.target.value)
       // input's handler changements set and callback to parent component. everything i need here.
    }
    render(){
        
        return(
            <div>
                <h3 className="state_h3">Projet X, veuillez entrez vôtre nom ci-dessous</h3>
                <label htmlFor="toto">Nom</label> <br/>
                <input name="toto" type='text' value={this.state.name} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default StateCompo;