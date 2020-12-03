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
        const ARRAY_GAME_ROW= [];
        this.props.games.map((jeu,key=0) => {
            console.log('jeu MAPING',jeu);
            ARRAY_GAME_ROW.push(<GameRow key={key+1} game={jeu}/>)
        })
        return(
            <table style={{'border': '4px double purple'}}>
                 <CategoryGames category='fps en dur'/>
                <thead>
                    <th>Libelé</th>
                    <th>Prix</th>
                    <th>Disponibilité</th>
                    <th>Categorie</th>

                </thead>
                
                <tbody>
                {ARRAY_GAME_ROW}

                </tbody>
             {/* <table>
                  <thead>
                      <tr>
                          <th colSpan="2">Les jeux</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>assassin's creed</td>
                          <td>Sekiro</td>
                      </tr>
                  </tbody>
              </table>*/} 
            </table>
        );
    }
    
}
export default GamesTable;