/**
 * @author Ayss
 * License
 * Container FilterGames 
 */
import React,{Component} from 'react';
import GamesTable from './GamesTable';
import SearchComponent from './SearchComponent'


class FilterGames extends Component{
    constructor(props){
        super(props);
        this.state ={}
        console.log('jeux',this.props.games);
    }

    render(){
       return(
            <div style={{'border': '3px solid green'}}>
                FilterGame
                  <SearchComponent/>
                   <GamesTable games={this.props.games}/>
            </div>
        );
    }
    
}
export default FilterGames;