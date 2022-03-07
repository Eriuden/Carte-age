import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';


function Footer(){
return(
    <footer className="footer">
        <section className="contact">

            <p className="footerContact"> Téléphone : 06 66 66 66 66</p>
            <p className="footerContact"> Mail : cartage@gmail.com</p>

        </section>

        <section className="cgVentes">
            <p className="pFooter"><Link to={"Cgv/"} className="footera">Conditions générales de ventes</Link></p>
        </section>

        <section className="faq">
            <p className="pFooter"><Link to={"Faq/"} className="footera">Foire aux questions</Link></p>
        </section>


    </footer>
)
}

export default Footer