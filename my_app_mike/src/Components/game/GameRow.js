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
         let price;
         !this.props.game.stock ? price = <span style={{color:'red'}}>{this.props.game.price}</span> : price = this.props.game.price;
        /* if(!this.props.game.stock){
            nameGame = <span style={{color:'red'}}>{this.props.game.name}</span>;
         }else nameGame = this.props.game.name;*/
         
        return(
            <tr style={{'background-color': 'purple'}}>
               <td> 
                    {this.props.game.name}
               </td>
               <td>
                   {price}
               </td>
             

            </tr>
        );
    }
    
}
export default GameRow;