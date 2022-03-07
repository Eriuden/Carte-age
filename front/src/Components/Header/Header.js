import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUser } from '../../api/user';

 

import '../../App.css'



function Header(props){
    console.log(props);

    /*const { cart } = useSelector((state) => ({
        ...state.cartReducer,
    }))*/

    

    const [toggleMenuVG, setToggleMenuVG] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)

    const [text, setText] = useState("")
    const [VGCardsFromApi, setVGCardsFromApi] = useState([])

    const toggleNavbar = () => {
        setToggleNav(!toggleNav);
    }

    const getVGCardsFromApi= (e) => {
        e.preventDefault()
        setText(e.currentTarget.value)
        if(text.length > 0){
            getVGCardsFromApi(text)
            .then(res=>{
                setVGCardsFromApi(res.results);
            })
            
        }
    }

    const getVGCardsByKeyword = (e) => {
        e.preventDefault()
        setText(e.currentTarget.value)
        if(text.length > 0){
            getVGCardsFromApi(text)
            .then(res=>{
                setVGCardsFromApi(res.results);
            })
        }
	};

    

    return(
        <header className='header'>
            {console.log(VGCardsFromApi)}
                <h1 className='headerH1'> Carte Age</h1>

                

                    <nav className='headerNav'>

                
                    
                    
                      

                            <Link to={"Home/"} className='link'>Acceuil</Link>

                            <h2 className='scrollNav'
                            onClick= {() => setToggleMenuVG(!toggleMenuVG)} 
                            //On inverse la valeur, donc, on la rend true, DONC, le menu s'affiche
                            >CardFight!! Vanguard
                            {toggleMenuVG && 
                            //On précise ce qui s'affiche alors
                (

                    <ul className='scrollingListVg'>

                        <li className='vgLi'><Link to={"VgCards/"} className='vgLiA'>Carte à l'unité</Link></li>
                        <li className='vgLi'><Link to={"VgBoosters/"} className='vgLiA'>Boosters</Link></li>
                        <li className='vgLi'><Link to={"Decks/"} className='vgLiA'>Recettes de deck</Link></li>

                    </ul>
                )}
                            </h2>                                                                                     
                         

                                                        
                                                
                        {props.isLogged ? //Si la personne est connectée

                            <>
                            {props.users.role =="admin" ? //Et si en plus, elle est admin
                            
                                <>
                                    <Link onClick={toggleNavbar} to={"/dashboard"} className="dashBoard" >
                                        
                                        Page de profil
                                    </Link>

                                    <Link onClick={toggleNavbar} to={"/logout"} className="/logout"  >
                                        Déconnexion
                                    </Link>

                                    <Link onClick={toggleNavbar} to={"/Admin"}>
                                        Admin
                                    </Link>

                                </>

                                : //Si c'est un compte "commun"

                                <>
                                    <Link onClick={toggleNavbar} to={"/dashboard"} className="dashBoard" >
                                        
                                        Page de profil
                                    </Link>

                                    <Link onClick={toggleNavbar} to={"/logout"} className="/logout"  >
                                        Déconnexion
                                    </Link>

                                </>
                                
                                }
                            </>
                            
                                : //Dans le cas où l'utilisateur n'est pas connecté

                                <>
                                <Link onClick={toggleNavbar} to={'Connexion/'} className='link'> Connexion</Link>

                                <Link to={"Inscription/"} className='link'> Inscription</Link>  

                                </>
                        }

                        <form className='search'>
                            <label>Rechercher</label>
                            <input type="text"
                            value={text}
                            onChange={getVGCardsByKeyword}
                            ></input>
                        </form>

                        <Link to={'/cart'} className='link' > Panier </Link> 
                        
                                                                                                                                                         
                          
                    </nav>

                

        </header>
    )

        
}

export default Header