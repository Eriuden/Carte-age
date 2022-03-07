import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import { Navigate } from "react-router-dom";
import { updateConnexionTimestamp } from "../api/user";
import { logoutUser } from "../redux/actions/userAction";

//Ce composant n'apparait jamais directement, c'est une fonction qui coupe la connexion
const Logout = (props) => {
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem("user_auth");
        updateConnexionTimestamp(props.userInfos.id, props.userInfos.token)
        .then(res=>{
            dispatch(logoutUser())
            setRedirect(true)
        })
    },[]);

    return <>{redirect && <Navigate to="/"/>}</>
}

export default Logout;