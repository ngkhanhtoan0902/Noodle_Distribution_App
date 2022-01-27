import { createStore } from 'redux'
import noodleReducer from '../Reducers/noodleReducers';

const store = createStore(noodleReducer,   );

store.dispatch({
    type: 'noodle01',
})
console.log('State Updated', store.getState())

export default store;