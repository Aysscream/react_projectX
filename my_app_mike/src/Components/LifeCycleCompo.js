/**
 * @author Ayss
 * License
 * full life cycle of component 
 */
import React,{Component} from 'react';

class LifeCycleCompo extends Component{
    constructor(props){
        super(props);
        this.state ={}
    }
    componentDidMount(){
        console.log('le composant a été monté entierement');
    }
    componentWillMount(){
        console.log('le composant va être monté',this.props);
    }
    componentWillReceiveProps(){
        console.log('as tu recu des props?');
    }
    render(){
        return(
            <div>coucou life Component</div>
        );
    }
    
}
export default LifeCycleCompo;