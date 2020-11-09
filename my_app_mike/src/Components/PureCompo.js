/**
 * @author Ayss
 * License
 * Pure component review
 */
import React from 'react';
import "./PureCompo.css"


export function PureCompo(){
    return(
        <div>
            <h4 className="pur_h4">Pure component</h4>
        </div>
    )
}
export function PureCompoProps({label,fieldCompoState}){
    console.log('props '+ fieldCompoState);
    return(
        <div>
            <h4 className="purProps_h4">Pure component with props {label} je recois {fieldCompoState} d'un autre composant</h4>
        </div>
    )
}
//export default PureCompo;