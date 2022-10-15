import React from "react";

const CompA = props =>
    <span>Primeiro: {props.valor}</span>

const CompB = props =>
<span>Segundo: {props.valor}</span>


//A diferença de exportar multiplas funções ao invés de uma, é que, deve-se colocar as funções entre chaves.
export {CompA, CompB}