import React from "react"


// variavél booleana para teste de condição
var condicao = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <div>
        <h1>{props.nome}</h1> 
        <h2>{props.valor}</h2>
        <h3> {condicao ? "sim":"naõ"} </h3>
    </div>
// lembrar que sempre devemos usar {} quando quisermos inserir js no render