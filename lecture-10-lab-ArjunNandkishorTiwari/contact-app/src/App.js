// import logo from './logo.svg';

import React from 'react';

import './App.scss';
import ContactList from './ContactList/ContactList';
import NavBar from './NavBar/NavBar';




class App extends React.Component

{

    constructor(props)

{

super(props);

this.state= {

contacts :[

"Arjun Tiwari"

]

}

}

componentDidMount(){
    this.setState({
      contacts:[...this.state.contacts,"Jane Doe"]
    });
  }
  
  
  
  addContact(newContact){
    const contacts=[...this.state.contacts];
    this.setState({
    contacts:[...contacts,newContact]
    });
  }
  

render()

{

return (
    <div>
    <NavBar></NavBar>
    <ContactList contacts = {this.state.contacts}></ContactList>
    </div>

);

}

}



export default App;