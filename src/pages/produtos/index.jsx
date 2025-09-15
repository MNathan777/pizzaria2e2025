import {axios} from 'axios'
import { useEffect, useState } from 'react';


const Produtos = () => {

    app.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then((response)=>{
        alert(JSON.stringify(response))
    })
    
    // Consumir os produtos do endpoint (rota)
    useEffect = (() => {


    }, []);
    // Objetos que possui lista de pizzas
    const pizzas = [
        "Pizza de mussarela",
        "Pizza de Calabresa",
        "Pizza Baiana",
        "Pizza Portuguesa",
        "Pizza de Atum", "Pizza de seis queijos"
    ];
    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return(
    <>
     <h3>Listagem de Produtos</h3>
        <ul>
        {listaPizzas}

        </ul>
        </>
    )
}

export default Produtos