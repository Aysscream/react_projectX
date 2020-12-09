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
        this.state ={
            filterText:'',
            inStockOnly: false
        }
        console.log('jeux',this.props.games);
    }
    handleFilterText = text =>{
        console.log('texte tapé parent',text); 
        this.setState({filterText:text})
    }
    handleCheckBox = checked =>{
        console.log('box check parent',checked);
        this.setState({inStockOnly: checked})
    }

    render(){
       return(
            <div>
                <SearchComponent 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    handleFilterText = {this.handleFilterText}
                    handleCheckBox = {this.handleCheckBox}
                    />
                <GamesTable 
                    games={this.props.games}
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                   />
            </div>
        );
    }
    
}
export default FilterGames;