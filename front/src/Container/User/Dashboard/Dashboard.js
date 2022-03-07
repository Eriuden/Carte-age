import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../api/user';
import "../../../App.css"



function Dashboard() {

    const [user, setUser] = useState([])

    // avec ceci, on pourra accéder aux pages nécessitant l'id d'un objet de la bdd
    let paramUrl = useParams();
	let id = paramUrl.id;  

    useEffect(() => {
        if(!user){ //Si l'user existe
            getUser(id).then((res) => {
                console.log(res)
                setUser(res.result.user)
            })
         
        }
        
    }, [id,user]);  
    
    
        

        return (                      
          
                    <main>

                    <h2>Vous êtes ici chez vous</h2>
                    


                    </main>
                                   
        )
    }

export default Dashboard