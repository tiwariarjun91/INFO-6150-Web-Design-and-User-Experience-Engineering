import React from 'react';
import { ContactActionType } from '../Store/Action/contacts-action';
import './NavBar.scss';
import { connect } from 'react-redux';
import { addContact as addContactAction} from '../Store/Action/contacts-action';

const mapDispatchToProps = (dispatch) => {
    return{
        addContact: (contact) => dispatch(addContactAction(contact))

    }
}
class NavBarComponent extends React.Component {

    constructor(props){
        super(props);
       
    }

    create(){
        const addContactHandeler = this.props.addContactHandeler;
        // const contact = "Trisha in NvBar";
        // addContactHandeler(contact);
        //this.props.addContact(contact);

    }
    render() {
        return(
            <nav>
                <button onClick={this.create.bind()}> Add Contact</button>
            </nav>
        );
    }

}
const NavBar = connect(null, mapDispatchToProps)(NavBarComponent);

export default NavBar;