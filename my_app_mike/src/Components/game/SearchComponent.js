/**
 * @author Ayss
 * License
 * Search component 
 */
import React,{Component} from 'react';

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state ={}
        console.log('props search compo',this.props);
    }
    handleFilterText = (e)=>{
            console.log('texte tapé',e.target.value); 
    }
    handleCheckBox = e =>{
        console.log('box',e.target.checked);
    }

    render(){
        return(
            <div>
               <div  style={{'border': '3px dashed red'}}>
                   <input type="text" placeholder="Search" onChange={this.handleFilterText}/>
                   <input type="checkbox" onChange={this.handleCheckBox}/>
                   {' '}
                   Produit en stock seulement!
               </div>
            </div> 
        );
    }
    
}
export default SearchComponent;