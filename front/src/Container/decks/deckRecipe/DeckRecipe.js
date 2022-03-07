import React, { useEffect, useState } from 'react';
import { createComments, getAllComments } from '../../../api/vanguardDB';
import { useParams } from 'react-router-dom';

import "../../../App.css"
import { Link } from 'react-router-dom';


    


function DeckRecipe() {
    const [comment, setComment] = useState([])

    let paramUrl = useParams();
	let id = paramUrl.id;

    useEffect(() => {
        getAllComments(id).then((res) => {
            console.log(res)
            setComment(res.result.comment)
        })
    }, [id,comment]);  
    

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            comment: comment
        };

        createComments(data).then((res) => {
            if(res.status === 200){
                localStorage.setItem(res.result)
                
            }
        });
    };
     

        return (                      
          
                <main>

                    <h2>Vous êtes libre de donner votre impression sur ce deck veuillez cependant rester courtois</h2>
                    

                    <form onSubmit={submitHandler} className="formComment">

                        <label> Poster votre avis</label>
                        <input type ="text" onChange={(e) => setComment(e.target.value)}
                        className="inputComment"/>

                        <input type="submit" value="Poster le commentaire" className="inputComment" />
                        <Link to={"EditComment/:id"}>Modifier le commentaire</Link>

                    </form>

                </main>
                                   
        )
    }

export default DeckRecipe