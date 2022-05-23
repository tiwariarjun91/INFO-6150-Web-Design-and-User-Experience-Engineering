// import contacts from './Contacts';

// const state = {
//     contacts
    
// };
// export default state;


import { createStore } from "redux";
import reducer from "./Reducers/contacts-recuder";

const store = createStore(reducer);

export default store;

