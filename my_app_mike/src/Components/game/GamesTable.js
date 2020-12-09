/**
 * @author Ayss
 * License
 * Games Table component 
 */
import React,{Component} from 'react';
import CategoryGames from './CategoryGames'
import GameRow from './GameRow'

class GamesTable extends Component{
    constructor(props){
        super(props);
        this.state ={}
        console.log("jeux dans gamesTable", this.props.games );
    }
    
    render(){
        const ARRAY_GAME_ROW = [];
        let lastCat;

        this.props.games.map((jeu,key=0) => {
                let jeuLower = jeu.name.toLowerCase();
                if(jeuLower.indexOf(this.props.filterText.toLowerCase()) === -1){
                   return ''
                }else if(this.props.inStockOnly && !jeu.stock){
                    return ''
                }
                console.log('category', jeu.category);
                console.log('last CAt', lastCat);
                if(jeu.category !== lastCat){
                    ARRAY_GAME_ROW.push(<CategoryGames category={jeu.category}/>)
                }
                lastCat = jeu.category;
                ARRAY_GAME_ROW.push(<GameRow key={key+1} game={jeu}/>)       
        return ''})
        return(
            <table >
                <thead>
                    <th>Libelé</th>
                    <th>Prix</th>
                
                </thead>
                
                <tbody>
                    {ARRAY_GAME_ROW}
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        );
    }
    
}
export default GamesTable;