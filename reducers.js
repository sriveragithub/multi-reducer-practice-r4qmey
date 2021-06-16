import { combineReducers } from 'redux';
import {
	ADD_DOCUMENT,
	UPDATE_DOCUMENT,
	DELETE_DOCUMENT,
	SET_SELECTED,
	SET_SEARCH
} from './actions';

// Reducer function
function documents(state=[], action) {
	switch(action.type) {
		case ADD_DOCUMENT:
			return [
				...state,
				action.payload
			]
		case DELETE_DOCUMENT:
			return state.filter(doc => doc.id !== action.payload.id);
		case UPDATE_DOCUMENT:
			return state.map(doc => doc.id !== action.payload.id ? doc : { ...action.payload });
	}
	return state;
}

function selected(state='', action) {
	switch(action.type) {
		case SET_SELECTED:
			return action.payload.id
	}
	return state;
}

function search(state='', action) {
	switch(action.type) {
		case SET_SEARCH:
			return action.payload.text
	}
	return state;
}

export const rootReducer = combineReducers({
  documents,
  selected,
  search,
})
