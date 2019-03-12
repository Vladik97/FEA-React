import * as types from "../constants/actionTypes";

export const add = payload => ({
	type: types.ADD,
	payload
});

export const dec = payload => ({
	type: types.DEC,
	payload
});