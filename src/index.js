//Bibliotécas mínimas necessárias para apçicações react
import React from "react"
import ReactDOM from "react-dom"

//Importando arquivo JSX com componente criado
import Primeiro from "./componentes/primeiro";

//Importando componente criado com argumento na função
import Segundo from "./componentes/Segundo";

//Importando multiplos componentes com argumento na função
import { CompA, CompB } from "./componentes/terceiro";

import Time from "./componentes/Time";
//Importando classe que recebeu argumentos de outro componente, no caso, time

import ComponenteFuncao from "./componentes/ComponenteFuncao";
//Importando função aninhada (uma função dentro da outra)

import ComponenteClasse from "./componentes/ComponenteClasse";
// Importando Componente de classe

// importando Componente inicial com lista
import App from "./App"

//definindo variável, que será o elemento root dentro do html a ser manipulado
const rootComponent = document.getElementById("root")

// variáveis para teste nas divs abaixo
let texto = 'texto exemplo';
let texto2 = 'Eu sou o segundo componente'
let flag = Math.random();
let frutasFavoritas = ["Abacaxi", "Tangerina", "Pêssego"];


const content = 
<div>
    {texto}
    <div style={{backgroundColor:"red"}} >
        Exemplo de Texto
    </div>
    <span>
        Exemplo de Texto2
    </span> 
</div>

const content2 =
<div className="teste">
    
    {flag > 0.2?
        <div>
            <p>{flag}</p>
        </div>
        : <p>nulo</p>
    }
</div>

const content3 =
<div>
    <h1>Minhas frutas favoritas (atualmente)!</h1>
    <ul>
        {frutasFavoritas.map((fruta,index)=>{
        return <li key={index}>{fruta}</li>;})
        }
    </ul>
</div>


// método necessário para renderizar
ReactDOM.render(
    [content, content2, content3, 
    <Primeiro/>, 
    <Segundo valor={'15'} nome={texto2} /> ,
    <div><CompA valor="1"/> <CompB valor="2"/></div>, 
    <Time/>,
    <ComponenteFuncao/>,
    <ComponenteClasse valor='ola'/>,
    <App/>] , rootComponent)

        

