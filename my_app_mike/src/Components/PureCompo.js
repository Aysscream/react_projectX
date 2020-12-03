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
            <h4 className="pur_h4">Pure component appear when you're tiping</h4>
        </div>
    )
}
export function PureCompoProps({label,fieldCompoState}){
    return(
        <div>
            <h4 className="purProps_h4">PureComponentProps --{label}--</h4>
            <p> hello <em>{fieldCompoState}</em>!</p>
        </div>
    )
}
//export default PureCompo;