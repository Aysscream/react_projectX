/**
 * @author Ayss
 * License
 * Search component 
 */
import React,{Component} from 'react';
import './SearchCompo.css'

class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state ={}
        console.log('Text',this.props.filterText);
        console.log('only in stock',this.props.inStockOnly);
    }
    handleFilterText = (e)=>{
            // console.log('texte tapé child',e.target.value); 
            this.props.handleFilterText(e.target.value)
    }
    handleCheckBox = e =>{
       // console.log('box child',e.target.checked);
        this.props.handleCheckBox(e.target.checked)
    }

    render(){
        return(
            <div>
               <div>
                   <input 
                        className='searchGames'
                        type="text" 
                        text={this.props.filterText}
                        placeholder="Search" 
                        onChange={this.handleFilterText}
                   />
                   <div className="webflow-style-input"></div>
                   <input 
                        type="checkbox" 
                        onChange={this.handleCheckBox}
                        checked={this.props.inStockOnly}
                    />
                   {' '}
                   Produit en stock seulement!
               </div>
            </div> 
        );
    }
    
}
export default SearchComponent;