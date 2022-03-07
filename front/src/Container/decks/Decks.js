import React, { useEffect, useState } from 'react';
import "../../App.css"
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../api/vanguardDB';
import Card from '../../Components/Card/Card';
import { createRecipes } from '../../api/vanguardDB';

//c'est un espace communautaire ressemblant à un forum où les gens peuvent partager leurs conceptions de decks

function Decks() {

    //il s'agit d'abord de récup les recettes de deck

    const [recipes, setRecipes] = useState([]);
    const [deckName, setDeckName] = useState("");
    const [deckContent, setDeckContent] = useState("");
    
    useEffect(() => {
        getAllRecipes().then((res) => {
            console.log(res)
            setRecipes(res.results)
        })
    }, []);   

    const submitHandling = () => {
      
        
        let data = {
            deckName: deckName,
            deckContent: deckContent,
        };


        createRecipes(data).then((res) => {
            console.log(res);
            if(res.status === 200){
                localStorage.setItem("recipes",res.recipes)
                
            }
        });
    };
    

     //on les map, soit on les boucle en return pour les afficher toutes
    //Faire un formulaire pour créer des recettes
    return (                      
        
        <main>

        

        <h2>Ici, partagez vos decks</h2>
        <h3>Afin de parfaire votre deck, soumettez le à l'avis de vos pairs</h3>
        <p>Veuillez s'il vous plait rester courtois, les contrevenants s'exposent à des bannissements</p>

        <form onSubmit={submitHandling} className="formPostDeck">

                <label> Nom du deck</label>
                <input type ="text" onChange={(e) => setDeckName(e.target.value)}
                className="inputDeck"/>

                <label> Contenu de votre deck:</label>
                <textarea onChange={(e) => setDeckContent(e.target.value)}
                className="inputDeckTextarea"/>

                <input type="submit" value="Poster" className="inputDeckSubmit" />

        </form>       
        
        {
            recipes.length > 0 ? 

            recipes.map(recipe => {

                return(
                    <Card key={recipe.id}>

                        <Link to={"DeckRecipe/:id"}><h3>{recipe.name}</h3></Link>
                        <Link to={"EditRecipe/:id"}>Modifier</Link>

                    </Card>
                )
            })
            
            : <h3>Aucune recettes</h3>
        }
        


        </main>
                       
)
}

export default Decks