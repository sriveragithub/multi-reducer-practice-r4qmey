// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Multiple Reducers</h1>`;

import store from './store';
import {
  addDocument,
  updateDocument,
  delDocument,
  setSelected,
  setSearch
} from './actions';

// Add a document
let newDocument = addDocument('New Document Title', 'New Doc Content');
store.dispatch(newDocument);

store.subscribe(() => {
  console.log('Action Dispatched');
  const state = store.getState();
  console.log(state);
});

// Update a document
let updatedDoc = updateDocument(
  '8cc0a332-08da-4b93-870a-c292dff89f43',
  'Update Document Title',
  'Updated Doc Content'
);
store.dispatch(updatedDoc);

// Delete a document
let delDoc = delDocument('014b5108-3ab8-4f76-8180-f2321b643067');
store.dispatch(delDoc);

// Set selected
let selectedDoc = setSelected('da42ac47-f540-4f28-99b7-d13f43799fa8');
store.dispatch(selectedDoc);

// Set Search
let search = setSearch('search text');
store.dispatch(search);
