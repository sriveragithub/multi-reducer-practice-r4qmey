import { v4 as uuidv4 } from 'uuid';

export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';

export const SET_SELECTED='SET_SELECTED';

export const SET_SEARCH = 'SET_SEARCH';

/**
 * ex: 
 * 
 * let document = {
 *  title: 'Test Doc',
 *  content: 'Document content'
 * }
 * 
 * addDocument(document.title, document.content);
 */
export function addDocument(title, content) {
  // This is our action object that we'll send to dispatch() later
  return {
    type: ADD_DOCUMENT,
    payload: {
      id: uuidv4(),
      title,
      content
    }
  }
}

export function delDocument(id) {
	return {
		type: DELETE_DOCUMENT,
		payload: {
			id
		}
	};
}

export function updateDocument(id, title, content) {
	return {
		type: UPDATE_DOCUMENT,
		payload: {
			id,
			title,
			content

		}
	};
}

export function setSelected(id) {
	return {
		type: SET_SELECTED,
		payload: {
			id
		}
	};
}

export function setSearch(text) {
	return {
		type: SET_SEARCH,
		payload: {
			text
		}
	};
}

