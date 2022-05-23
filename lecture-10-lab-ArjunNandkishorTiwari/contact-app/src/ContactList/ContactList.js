import React from 'react';

import './ContactList.scss';

import Contact from './Contact';




class ContactList extends React.Component{
    constructor(props){
        super(props);
}

render(){
    const contacts = this.props.contacts.map((c,i) => <li key={i}><Contact contact = {c}></Contact></li>);
    return (
        <ol>
            {contacts}

        </ol>
    );
}
}

export default ContactList;