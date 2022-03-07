import React, { useState } from "react";
import { editComments } from "../../../api/vanguardDB";
import { useParams } from "react-router-dom";


function EditComment(){

    let paramUrl = useParams();
	let id = paramUrl.id;

    const [comment, setComment] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            comment: comment
        };

        editComments(id,data).then((res)=>{
            if(res.status === 200){
                localStorage.setItem(res.result)
            }
            
        })

        
    }

    //Submit handler va gérer l'action du formulaire
    //En gros, ce qui se passe quand on submit le form
    //C'est qu'il va réenregistrer le com avec le nouveau texte

    return(

        <form onSubmit={submitHandler} className="formComment">

            <label> Poster votre avis</label>
            <input type ="text" onChange={(e) => setComment(e.target.value)}
            className="inputComment"/>

            <input type="submit" value="Poster le commentaire" className="inputComment" />
            

        </form>
    )
}

export default EditComment