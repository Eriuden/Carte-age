import React, { useEffect, useState } from 'react';
import { getAllRecipes } from '../api/vanguardDB';
import { getAllComments } from '../api/vanguardDB';
import { deleteComments } from '../api/vanguardDB';
import { deleteRecipes } from '../api/vanguardDB';




function Admin() {

    //afficher tout les deck recipe, et les commentaires
    //permettre pour chacun une suppression, donc on rajoute un bouton de suppression (actif hein, celà va de soi)

    const [recipes, setRecipes] = useState([])
    const [comments, setComments] =useState([])
    
    useEffect(() => {
        getAllRecipes().then((res) => {
            console.log(res)
            setRecipes(res.result.recipes)
        })
    }, []);  

    useEffect(() => {
        getAllComments().then((res) => {
            console.log(res)
            setComments(res.result.comments)
        })
    }, []); 

        return (                      
          
                    <main>

                    <h2>Que faites vous ici ?</h2>

                        {recipes.map((recipe) => {

                            return(
                                <Card key={recipe.id}>

                                    <Link to={"DeckRecipe/:id"}><h3>{recipe.name}</h3></Link>
                                    <button onClick={deleteRecipes} value={"suppression"}></button>
                                    
                                    
                                    

                                </Card>
                            )
                            })}

                        {comments.map((comment) => {

                            return(
                                <Card key={comment.id}>

                                    <h3>{comment.name}</h3>
                                    <button onClick={deleteComments} value={"suppression"}></button>
                                

                                </Card>
                            )
                            })}

                    
                    

                    </main>
                                   
        )
    }

export default Admin