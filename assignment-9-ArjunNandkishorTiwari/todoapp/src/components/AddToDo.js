import React, {Component} from 'react';
import '../scss/AddToDo.scss';

class AddToDo extends Component{

    constructor(props){
        super(props);
        this.state={
            showAddToDo:false,
            buttonText: "Show Add Options"
        }

        console.log(this.props);
    }

    // displayHidden(){
    //     var x = document.getElementById("noDisplay");

    //     if(x.style.visibility == "hidden"){
    //         x.style.visibility = "visible";
    //     } else{
    //         x.style.visibility = "hidden";
    //     }
    // }

    displayHidden(){
        // console.log("here")

        const showAddToDoStatus = ! this.state.showAddToDo;
        if(!showAddToDoStatus){
            this.setState({
                buttonText : "Show Add Options"
            })
        } else{
            this.setState({
                buttonText : "Hide Add Options"
            })
        }
        this.setState({
             showAddToDo: showAddToDoStatus
            // buttonText : "Hide Add Options"
        })

    }

    saveToDoData(event){
        console.log("check 0");
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;

        console.log("check 1");
        const payload = {
            "title" : title,
            "description" : description,
            "createdDate" : date,
            "time" : time
        }
        // console.log("check 2");
        const request = {
            method: "POST",
            body : JSON.stringify(payload),
            headers: {"Content-type": "application/json"}
        }

        console.log("check 3");

        // fetch("http://localhost:9000/tasks", request)
        //     .then((response)=>response.json())
        //     .then(() => this.props.refresh())
        //     .catch((err)=>console.log(err));

        fetch("http://localhost:9000/tasks", request)
        .then((response)=>response.json())
        .then(()=>this.props.displayData())
        .catch((err)=>console.log(err));
         console.log("here ......")

    }


    render(){
        return(
            <div className = "options">
            <h1>TODO App</h1>
            <h6></h6>
            

           {this.state.showAddToDo && ( <div id = "noDisplay">
                <input type = "text" id = "title"></input>
                <input type = "text" id = "description"></input>
                <input type = "date" id = "date"></input>
                <input type = "text" id = "time"></input>
                <button type = "button" id = "add" onClick = {() => this.saveToDoData()}>Add Task</button>
            </div>)}

            <button onClick = {() => this.displayHidden()} id = "show">{this.state.buttonText}</button>
            
            </div>
        )
    }
}


export default AddToDo;