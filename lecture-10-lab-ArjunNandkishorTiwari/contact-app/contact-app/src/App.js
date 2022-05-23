import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './NavBar/NavBar';
//import ContactList from './Contract_list/ContactList';
import ContactL from './Contact_list/ContactList';
import TodoForm from './componenTodo/TodoForm';
import { connect } from 'react-redux';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// const mapStateToProps = (state) => {
//   return {contacts: state.contacts}
// }

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        //contacts: this.props.contact
        contacts: ["Trisha"]
    };
}

addContact(newContact){
const contacts = [...this.state.contacts];
  this.setState( () => {
contacts.push(newContact);
return {contacts};
  })
}





render(){
  return (
     <div>
       <TodoForm />
     <NavBar ></NavBar>
     <ContactL contacts={this.state.contacts}></ContactL>
     </div>
  );
}
}

// const App = connect(mapStateToProps)(AppComponent);

export default App;
