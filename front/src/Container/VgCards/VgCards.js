import React, { useEffect, useState } from 'react';
import "../../App.css"
import Card from '../../Components/Card/Card';
import {getAllVGCards} from "../../api/vanguardDB";
import { Link } from 'react-router-dom';



function VgCards() {

    const [cards, setCards] = useState([

    ])
    
    
    useEffect(() => {
        getAllVGCards().then((res) => {
            console.log(res)
            setCards(res.results)
        })
    }, []);  

    
        return(

            <main className='body'>
                <h2>Nos cartes à l'unité</h2>

                {
                        
                    cards.length > 0 && cards.length < 20 ?
        
                        cards.map((card) => { //on boucle sur chaque carte
                                
                            return(
                                //La clé pour repérer la carte à chaque itération
                                //puis on affiche les champs qui nous intéressent de l'API*

                                <Card key={card.data.id}> 
                                        
                                    <Link to={"/VgCardsDetail/:id"}>{card.data.name}</Link>
                                        <img src={card.data.imageurlen} alt="illustration de la carte" />
        
                                        <ul className='cardsList'>
                                            <li>Clan: {card.data.clan}</li>
                                            <li>Nation: {card.data.nation}</li>
                                            <li>Grade: {card.data.grade}</li>
                                            <li>Type: {card.data.cardtype}</li>
                                            <li>Efet: {card.data.effect}</li>    
                                        </ul>  
                                        
                                </Card>
                            )
                        })
        
                    : <h3>Aucun résultats</h3>
                        
                 }

            </main> 
            
        )   

}

export default VgCards