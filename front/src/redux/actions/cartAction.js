import { MODIFY_CART, CLEAN_CART} from "./actions-types";

export const addToCart = (cart, newProduct,quantityAdded) => {
    return function (dispatch) {
        //Si notre panier n'est pas vide, on trouvera un index
        let same = cart.findIndex((cartIndexFound) => cartIndexFound.id === newProduct.id);
        //si same est -1; le produit n'y est pas et on l'ajoute
        if (same === -1) {
            newProduct.quantity = parseInt(quantityAdded);
            cart.push(newProduct);
        } else {
        //Si il y est, alors on dit juste "un de plus dans le panier"
            cart[same].quantity += parseInt(quantityAdded);
        }

        let locStorCart = JSON.stringify(cart);
        window.localStorage.setItem('cart-age', locStorCart)

        dispatch({
            type: MODIFY_CART,
            payload: cart,
        });
    };
};

export const deleteToCart = (cart, product) => {
    return function (dispatch) {
        let newcart = cart.filter((filteredCart) => filteredCart.id !== product.id);
        dispatch({
            type: MODIFY_CART,
            payload: newcart,
        });
    };
};

export const CleanCart = () => {
    return function(dispatch){
        dispatch({
            type: CLEAN_CART,
            payload: null
        })
    }
}