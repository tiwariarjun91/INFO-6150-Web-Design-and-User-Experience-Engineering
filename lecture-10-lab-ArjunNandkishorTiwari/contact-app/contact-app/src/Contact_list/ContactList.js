import React from "react";
import './ContactList.scss';
import Contact from './Contact';
import { connect } from "react-redux";


const mapStateToProps= (state) => ({contacts: state.contacts});

class ContactListComponent extends React.Component{
    
    constructor(props){
        super(props);
        
    }
    render(){
        const contacts = this.props.contacts.map((c,i)=><li key={i}><Contact contact = {c}></Contact></li>);
    return(
        <ol>
            {contacts}
        </ol>
    )
    }
   
}

const ContactList = connect(mapStateToProps)(ContactListComponent);

export default ContactList;