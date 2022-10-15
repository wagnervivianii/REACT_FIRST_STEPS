import React, {Component} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default class ComponentsClasse extends Component{
    render(){
        return(
            <h1>{this.props.valor ?? "valor Default" }</h1>
        )
    }
}
