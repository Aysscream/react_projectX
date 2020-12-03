/**
 * @author Ayss
 * License
 * display game row component 
 */
import React,{Component} from 'react';

class GameRow extends Component{
    constructor(props){
        super(props);
        this.state ={}
    console.log('le jeu', this.props.game);


    }

    render(){
         let nameGame;
         !this.props.game.stock ? nameGame = <span style={{color:'red'}}>{this.props.game.name}</span> : nameGame = this.props.game.name;
        /* if(!this.props.game.stock){
            nameGame = <span style={{color:'red'}}>{this.props.game.name}</span>;
         }else nameGame = this.props.game.name;*/
         
        return(
            <tr>
               <td> 
                    {nameGame}
               </td>
               <td>
                   {this.props.game.price}
               </td>
               <td>
                   {this.props.game.stock ? 'en stock':'rupture de stock'} 
               </td>
               <td>
                   {this.props.game.category} 
               </td>

            </tr>
        );
    }
    
}
export default GameRow;