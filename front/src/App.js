
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Container/Home';
import VgBoostersDetail from './Container/VgBoostersDetail';
import VgCardsDetail from './Container/VgCardsDetail';
import VgBoosters from './Container/VgBoosters/VgBoosters';
import Inscription from'./Container/User/inscription/Inscription';
import Connexion from'./Container/User/connexion/Connexion';
import Cgv from './Container/Cgv/Cgv';
import Faq from './Container/FAQ/Faq';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import store from './redux/Store';
import cardsReducer from './redux/reducers/cardsReducer';
import {getUser} from "./api/user";
import {Admin} from 'react-admin';
import Cart from './Container/Cart';
import Decks from './Container/decks/Decks'
import DeckRecipe from './Container/decks/deckRecipe/DeckRecipe';
import Dashboard from './Container/User/Dashboard/Dashboard';
import VgCards from './Container/VgCards/VgCards';
import EditComment from './Container/decks/deckRecipe/EditComment';
import EditRecipe from './Container/decks/EditRecipe';




const dataProvider = getUser


function App() {

  const rootReducer = combineReducers({
    content: cardsReducer,
  });

  const store = createStore(rootReducer);

  
  //Les routes seront appellées par les Link, l'aspect pratique,
  //c'est que ça appelle juste un composant, donc mon header et footer sont conservés.
  //Ce qui est chargé, c'est le corps, La seule chose qui change vraiment pour chaque page
  //Avec a href, on change toute la page, ce qui est beaucoup plus lourd à charger
  
  return (
    <div className="App">

      <Header />
      
      <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/VgBoosters" element ={<VgBoosters/>} />
      <Route exact path="/VgCards" element={<VgCards/>} />
      <Route exact path="/VgCardsDetail/:id" element={<VgCardsDetail/>} />
      <Route exact path="/VgBoostersDetail/:id" element={<VgBoostersDetail/>} />
      <Route exact path="/Inscription" element={<Inscription/>} />
      <Route exact path="/Connexion" element={<Connexion/>} />
      <Route exact path="/Cgv" element={<Cgv/>} />
      <Route exact path="/Faq" element={<Faq/>} />
      <Route exact path="/Admin" element={<Admin/>} />
      <Route exact path="/Cart" element={<Cart/>} />
      <Route exact path="/Decks" element={<Decks/>} />
      <Route exact path="/DeckRecipe/:id" element={<DeckRecipe/>} />
      <Route exact path="/Dashboard/:id" element ={<Dashboard/>} />
      <Route exact path="/EditComment/:id" element ={<EditComment/>} />
      <Route exact path="/EditRecipe/:id" element ={<EditRecipe/>} />


      </Routes>

      <Footer />

      
      
    </div>
  );
}

export default App;
