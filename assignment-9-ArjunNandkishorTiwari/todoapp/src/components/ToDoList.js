import React, {Component} from 'react';
import "../scss/AddToDoList.scss";

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            error : props.error,
            tasks : props.tasks,
            dataPresent : props.dataPresent,
            show : false,
            id:''
        }
       
    }

    changeStatus(task){
        const id = task._id;
        // var stat1 = "Completed";

        if(task.status === "Active"){
            task.status = "Completed";
        }else{
            task.status = "Active";
        }

       

        const url = 'http://localhost:9000/tasks/'+id;

        const payload = {
            "title" : task.title,
            "description" : task.description,
            "createdDate" : task.createdDate,
            "time" : task.time,
            "status" : task.status
        }

        const request = {
            method: "PUT",
            body : JSON.stringify(payload),
            headers: {"Content-type": "application/json"}
        }

        fetch(url, request)
        .then((response)=>response.json())
        .then(()=>this.props.displayData())
        .catch((err)=>console.log(err));


    }

    deleteTask(id){
        const url = 'http://localhost:9000/tasks/'+id;
        // fetch(url, {method: 'DELETE'})
        //     .then(()=> this.props.displayData());

            const request = {
                method: "DELETE",
                headers: {"Content-type": "application/json"}
            }
    
            console.log("check 3");
    
            // fetch("http://localhost:9000/tasks", request)
            //     .then((response)=>response.json())
            //     .then(() => this.props.refresh())
            //     .catch((err)=>console.log(err));
    
            fetch(url, request)
            .then((response)=>response.json())
            .then(()=>this.props.displayData())
            .catch((err)=>console.log(err));
    }

    showDetails(bool,id,task){
        this.setState({
            show: bool,
            id:id
        })

        console.log("inside showDetails",this.state.id, this.state.show);
        let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');
    let para4 = document.createElement('p');

    // const head1 = document.getElementById("titlehead");
    // const head2 = document.getElementById("descriptionhead");
    // const head3 = document.getElementById("datehead");
    // const head4 = document.getElementById("timehead");

    para1.textContent = task.title;
    para2.textContent = task.description;
    para3.textContent = task.createdDate;
    para4.textContent = task.time;
    console.log(para1);

    // head1.appendChild(para1);
    // head2.appendChild(para2);
    // head3.appendChild(para3);
    // head4.appendChild(para4);


    document.querySelector("h5").appendChild(para1);
    document.querySelector("h5").appendChild(para2);
    document.querySelector("h5").appendChild(para3);
    document.querySelector("h5").appendChild(para4);

    setTimeout(function(){
        document.querySelector("h5").removeChild(para1);
        document.querySelector("h5").removeChild(para2);
        document.querySelector("h5").removeChild(para3);
        document.querySelector("h5").removeChild(para4);
    },2000);

    console.log("check 5");

    }

    
    render(){
        //  console.log("this.props.tasks in todolist",this.props.tasks);
        // console.log("in todolist render")
        // console.log("in todolist render")
        const error = this.state.error;

        // const tasks = this.state.tasks;
        const tasks = this.props.tasks;
        const dataPresent = this.state.dataPresent;
        // console.log("in render of todolist",tasks,dataPresent);
        if(error){
            return (
                <div>
                Error receiver : {this.props.error.message}
            </div>
            ) 
        } else{
            // console.log("in data Present")
            // this.props.displayData();
            return(
                <div className='listdiv'>
                <h5 id = "titlehead"></h5>
                <h5 id = "descriptionhead"></h5>
                <h5 id = "datehead"></h5>
                <h5 id = "timehead"></h5>
                <ul >
                {tasks.map((task, i)=>(
                    
                   
                   
                        <li className = "ulClass" key={task._id} >
                        <label> {task.title}</label>
                       
                       
                        <button onClick = {() => this.deleteTask(task._id)}> delete</button>
                        <button onClick = {() => this.showDetails(true, task._id,task)}> show details</button>
                        <button onClick = {() => this.changeStatus(task)}>{task.status}</button>
                       
                        {this.show && this.id===task._id &&(
                            <div>
                            description : {task.description}<br/>
                            time : {task.createdDate}

                            </div>
                        )}
                        </li>
                    ))}
                </ul>
                </div>
            )
        }
    }
}


export default ToDoList;