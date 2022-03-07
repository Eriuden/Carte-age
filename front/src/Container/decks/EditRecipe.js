import React, { useState } from "react";

import { editRecipes } from "../../api/vanguardDB";
import { useParams } from "react-router-dom";


function EditRecipe(){

    let paramUrl = useParams();
	let id = paramUrl.id;

    
    const [deck, setDeckName] = useState("");
    const [deckContent, setDeckContent] = useState("");

    
        
        

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            deck: deck,
            deckList: deckContent,
        };

        editRecipes(id,data).then((res)=>{
            if(res.status === 200){
                localStorage.setItem(res.result)
            }
            
        })

        
    }

    

    return(

        <form onSubmit={submitHandler} className="formPostDeck">

            <label> Nom du deck</label>
            <input type ="text" onChange={(e) => setDeckName(e.target.value)}
            className="inputDeck"/>

            <label> Contenu de votre deck:</label>
            <input type ="text" onChange={(e) => setDeckContent(e.target.value)}
            className="inputDeck"/>

            <input type="submit" value="Poster le deck" className="inputDeck" />

        </form>
        
    )
}

export default EditRecipe