/**
 * @author Ayss
 * License
 * full life cycle of component 
 */
import React,{Component} from 'react';

class LifeCycleCompo extends Component{
    constructor(props){
        super(props);
        this.state ={text:"voici le composent de Cyvle de vie .. salut... je vais me detruire.."}
    }
    componentDidMount(){
        console.log('le composant a été monté entierement');
        setTimeout(()=>{this.setState({text:"..............."})},4000)


    }
    /*UNSAFE_componentWillMount(){
        console.log('le composant va être monté',this.props);
    }
    UNSAFE_componentWillReceiveProps(){
        // present dans le composant stateCompo 
    }*/
    
    render(){
        return(
            <div>{this.state.text}</div>
        );
    }
    
}
export default LifeCycleCompo;