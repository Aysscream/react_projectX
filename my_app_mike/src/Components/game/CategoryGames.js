/**
 * @author Ayss
 * License
 * Search component 
 */
import React,{Component} from 'react';

class CategoryGames extends Component{
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        return(
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        );
    }
    
}
export default CategoryGames;