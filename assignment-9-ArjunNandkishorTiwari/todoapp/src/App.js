import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import React, {Component} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <AddToDo />
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      error:null,
      tasks: [],
      dataPresent : false
    }
  }

  displayData = () => {
    console.log("in display data");
    fetch("http://localhost:9000/tasks")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            tasks: result,
            dataPresent:true
          });
        },
        (error) => {
          this.setState({
            error,
            dataPresent : true
          });
        }
      )

      // console.log("tasks after displayData",this.state.tasks);
  }

   //  <ToDoList displayData={this.displayData} tasks= {this.state.tasks} error={this.state.error}></ToDoList>

  componentDidMount(){
    // console.log("in component didMount");
    // console.log(this.state);
    this.displayData();
    // console.log("after calling display data");
    // console.log(this.state);
  }

  render(){
    // console.log(this.state.tasks, "!!!!!!!!!!!!");
    return(
      <div className="App">
       <AddToDo displayData = {this.displayData}></AddToDo>
       
       <ToDoList displayData={this.displayData} tasks= {this.state.tasks} error={this.state.error} dataPresent={this.state.dataPresent}></ToDoList>


      
    </div>
    );
  }
}

export default App;
