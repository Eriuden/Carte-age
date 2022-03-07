import React, {useState} from "react";
import { registerUser } from "../../../api/user";
import { Navigate } from "react-router-dom";
import "../../../App.css"



function Inscription() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");

    const [error, setError] = useState("");

    const [redirect, setRedirect] = useState(false);

    const onSubmitForm = () => {
        if (password.length < 5) {
            return setError ("Votre mot de passe est trop court, il doit être au minimum de cinq lettres")
        }

        let data = {
            name: name,
            password: password,
            mail: mail,
        }

        registerUser(data).then((res) => {
            if (res.status === 200) {
                setRedirect(true);
            }
        })
    }

    return (
        <>
        
            {redirect && <Navigate to="/connexion" />}
            <main role="main" className="inscriptions">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmitForm();
                }}
                className="formInscription"
                >
                  
                    <label htmlFor="name">Nom :</label>
                    <input type="text" name="name" onChange={(e) => {
                        setName(e.currentTarget.value);
                    }}
                    className="inputInscription"
                    />
                  
                  
                  
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" name="password" onChange={(e) => {
                        setPassword(e.currentTarget.value);
                    }}
                    className="inputInscription"
                    />
                  

                  

                    <label htmlFor="mail">Adresse mail :</label>
                    <input type="email" name="mail" onChange={(e) => {
                        setMail(e.currentTarget.value);
                    }}
                    className="inputInscription"
                    />

                  

                    <input type="submit" value="Inscription"/>

                </form>
            </main>
        </>
    )
}

export default Inscription