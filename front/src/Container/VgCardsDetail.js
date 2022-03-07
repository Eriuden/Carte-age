import React from 'react';
import { useState } from "react";
import {getAllVGCards} from"../api/vanguardDB";
import Card from '../Components/Card/Card';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function VgCardsDetail() {

    let paramUrl = useParams();
	let id = paramUrl.id;

    const [card, setCard] = useState(null)
    
    
    useEffect(() => {
        if(!card){ //si carte n'est pas null, en somme, si on en a
            getAllVGCards(id).then((res) => {
                console.log(res)
                setCard(res.result.card)//on affiche lesquelles
            })
        }
        
    }, [id,card]);  

    return (                  

            <body>

                <main>

                {card !==null && (

                    <Card key={card.data.id}>

                        <h3>{card.data.name}</h3>
                        <img src={card.data.imageurlen} alt="illustration de la carte" />

                        <ul>
                            <li>Clan: {card.data.clan}</li>
                            <li>Nation: {card.data.nation}</li>
                            <li>Grade: {card.data.grade}</li>
                            <li>Type: {card.data.cardtype}</li>
                            <li>Efet: {card.data.effect}</li>    
                        </ul>  

                    </Card>
                )
                
                
                }

                

                </main>
            </body>

        
        
    )
}

export default VgCardsDetail