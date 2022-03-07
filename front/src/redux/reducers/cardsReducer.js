import { GET_ALL_VGCARDS } from "../actions/actions-types";


const INITIAL_STATE = {
	cardsInfos: [],
};

const cardsReducer = (state = INITIAL_STATE, action) => {
	// console.log(action);
	switch (action.type) {
		case GET_ALL_VGCARDS:
			return { ...state, cardsInfos: action.payload};
// no default
	}
	return state;
};

export default cardsReducer;