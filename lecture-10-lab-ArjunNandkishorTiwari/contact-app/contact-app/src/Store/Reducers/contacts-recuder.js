import { ContactActionType } from "../Action/contacts-action";
import AppState from './../state';


const reducer = (state = AppState, action) => {
    const type = action.type;
    let contacts;

    switch(type){
        case ContactActionType.ADD_CONTACT:
            contacts = [...state.contacts, action.payload];
            break;
        default:
            contacts = [...state.contacts];
            break; 
    }
    return Object.assign({}, ...state, { contacts});
}

export default reducer;