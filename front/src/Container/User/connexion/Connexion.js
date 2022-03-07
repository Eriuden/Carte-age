import React,{useState} from "react";
import { Navigate } from "react-router-dom";
import { logInUser } from "../../../api/user";
import "../../../App.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [redirect, setRedirect] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {
            email: email,
            password: password,
        };

        logInUser(data).then((res) => {
            if(res.status === 200){
                localStorage.setItem("user_auth", res.token)
                setRedirect(true)
            }
        });
    };

    return (
        <main className="connexions">
            {redirect && <Navigate to="/home" />}
            

            <form onSubmit={submitHandler} className="formConnexion">

              

                <label> Votre adresse mail:</label>
                <input type ="email" onChange={(e) => setEmail(e.target.value)}
                className="inputConnexion"/>

                <label> Votre mot de passe:</label>
                <input type ="password" onChange={(e) => setPassword(e.target.value)}
                className="inputConnexion"/>

                <input type="submit" value="Connexion" className="inputConnexion" />

            </form>
        </main>
    )
}

export default Login;