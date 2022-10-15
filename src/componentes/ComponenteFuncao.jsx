import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const nomes = ["zetti","cafu","roberto carlos","ronaldinho"]

    const gerarNomes = itens =>{
        return itens.map(itens=> <li>{itens}</li>)
    }
    return (
        <ul>
            {gerarNomes(nomes)}
        </ul>
    )
}


