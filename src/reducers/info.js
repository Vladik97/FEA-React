import * as types from "../constants/actionTypes";

const initState = {
	dataFetch: [],
	title: "",
	cuntry: ""
};

export default (state = initState, { type, payload }) => {
	switch (type) {
		case types.ADD: {
			return {
				...state,
				count: state.count + 1
			};
		}
		case types.DEC: {
			return {
				...state,
				count: state.count - 1
			};
		}
		default:
			return state;
	}
};