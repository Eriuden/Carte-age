import React, {useEffect} from 'react'
import { addToCart } from '../../redux/actions/cartAction'
import { useDispatch} from "react-redux"
import '../../App.css'
import { config } from '../../config'


import { useState } from 'react'

function Card(props) {

    //Au final, ce composant servira surtout à créer un cadre en CSS

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [cardsList, setCardsList] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const [quantity, setQuantity] = useState("");
	const [error, setError] = useState(null);

    const dispatch = useDispatch()

    //il faudra déplacer tout ça

   useEffect(() => {
       fetch(
           'https://card-fight-vanguard-api.ue.r.appspot.com/api/v1/card',
           {
               mode: "no-cors"
           }
       )
           .then(res => res.json())
           .then(Response => {
                
                setCardsList(Response.items);
                setIsLoading(false);
                console.log(cardsList)
                console.log(isLoading)
           })
           .catch(error => console.log(error))
   }); 
   
   const onClickAddCart = (cards) => {
    console.log(cards);
    console.log(quantity);
    if(quantity !== "" && !isNaN(quantity)) {
        // setIsPopUp( true)
        dispatch(addToCart(props.cartInfos, cards, quantity))
    } else {
        setError({error: "Entrez une valeur correcte (chiffre)"})
    }
    setQuantity("")
}


    return (
        <article className='card'>
            
        </article>
    )
}

export default Card