import { MODIFY_CART,CLEAN_CART } from "../actions/actions-types";

let locStorCart = JSON.parse(window.localStorage.getItem('cart-age'));

if (locStorCart === null) {
	locStorCart = []
}

let totalPrice = calculateTotalPrice (locStorCart)

const initialState = {
	cart: locStorCart,
	totalPrice: totalPrice
};

function calculateTotalPrice(cart) {
	let priceTotal = 0;

	for (let i=0; i < cart.length; i++) {
		let total = parseFloat(cart[i].price) * parseInt(cart[i].quantityInCart);
		priceTotal += total;
	}

	return priceTotal
}

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case MODIFY_CART:

			let totalPriceAmount = calculateTotalPrice(action.payload);
			
			return { cart: action.payload, totalPriceAmount: totalPriceAmount };

		
			
		
		case CLEAN_CART:
			return{cart: [], totalPriceAmount: 0};

			default:
				return state;
			
	}


	
	
}
