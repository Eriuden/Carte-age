import React from 'react';
import { useState } from "react";
import {getVGBoostersFromApi} from"../api/vanguardDB";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '../Components/Card/Card';



function VgBoostersDetail() {


    let paramUrl = useParams();
	let id = paramUrl.id;

	const [booster, setBooster] = useState([]);
	
    useEffect(() => {
        if(!booster){
            getVGBoostersFromApi(id).then((res) => {
                console.log(res)
                setBooster(res.result.booster)
            })
        }
        
    }, [id,booster]);  

    return (                       

            <body>

                <main>

                {booster !==null && (
                    
                    <Card key={booster.data.id}>

                        <h3>{booster.data.name}</h3>
                        
                    </Card>
                )}

                </main>
            </body>
               
    )
}

export default VgBoostersDetail