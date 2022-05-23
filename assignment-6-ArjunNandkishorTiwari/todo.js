// alert("connected");

// this list is used as a local database
var dataItemList = [];

// this list will only store tasks that need to be displayed
var displayList = [];

// this is to consolidated various data variables needed to be there in the task
var dataItem = function(title, description,date,time){
    return {
        title,
        description,
        date,
        time
    };
}

// these are the nuttons that will have event listeners
var addButton = document.getElementById("add");
var deleteButton = document.getElementById("delete");
var displayButton = document.getElementById("display");

// this list will store the tasks to be displayed 
// this list is present in the html code
var ul = document.getElementById("list");
// var ul1 = document.getElementById("displayList");

// event listeners for add item, remove item and display task details
addButton.addEventListener("click",addItem);
deleteButton.addEventListener("click",deleteItem);
displayButton.addEventListener("click",displayItem);

// function fetchJSON(){
    

// }

// this event listener is to laod json data from the data.json file
// this event listener is fired when the window is loaded as its a on load listener
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",function(response){
        console.log("here");
        if (this.status === 200){
            const dataJSON = this.responseText;
            const todoJSON = JSON.parse(dataJSON);
            console.log(todoJSON);
            for(var i = 0; i <=todoJSON.length;i++){
                todo1 = todoJSON[i];
                var titleJSON = todo1.title;
                var descriptionJSON = todoJSON[i].description;
                var dateJSON = todoJSON[i].date;
                var timeJSON = todoJSON[i].time;
                var itemAppend = dataItem(titleJSON, descriptionJSON,dateJSON,timeJSON );
                dataItemList.push(itemAppend);
                var li = document.createElement("li");
                li.setAttribute("class","mycheck");
                var checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.setAttribute("id","check");

                var label = document.createElement("label");

                var textnode = document.createTextNode(itemAppend.title);

                ul.appendChild(label);
                li.appendChild(checkBox);
                label.appendChild(textnode);
                li.appendChild(label);
                ul.insertBefore(li,ul.childNodes[0]);
            }
        }
    });

    xhr.open('GET','data/data.json');
    xhr.send();

  });

// this event listener is to add the data in ul and main local data list
// this event listner will be fired when add data button is clicked
function addItem(){
    console.log("Add Button Clicked");
    var title = document.getElementById("title");
    var titleItem = title.value;
    var description = document.getElementById("description");
    var descriptionItem = description.value;
    var date = document.getElementById("date");
    var dateItem = date.value;
    var time = document.getElementById("time");
    var timeItem = time.value;
    if(titleItem == "" || descriptionItem == "" || dateItem == "" || descriptionItem == "" ){
        var p = document.createElement("p");
        var pValue = document.createTextNode("Please add all the data");
        p.appendChild(pValue);
        document.querySelector("h6").appendChild(p);
        setTimeout(function(){
            document.querySelector("h6").removeChild(p);
           
        },2000);
    
    } else {
        

        var todoItem = dataItem(titleItem,descriptionItem,dateItem,timeItem);

        dataItemList.push(todoItem);
        console.log(todoItem);
        console.log(dataItemList);

        var li = document.createElement("li");
        li.setAttribute("class","mycheck");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("id","check");

        var label = document.createElement("label");

        var textnode = document.createTextNode(titleItem);

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);

    }
    

}

// event listener to delete completed tasks
function deleteItem(){
    console.log("Delete Button Clicked");
    console.log("$$$$$$$$$$$$",dataItemList);
    var li = ul.children;
    console.log(li);
    for(i = 0; i < li.length; i++){
        // const element = li[i];
        // console.log(element);
        //console.log("!!!!!!!!!!!",li[i].children[1].innerHTML);
        while(li[i] && li[i].children[0].checked){
            deleteDataItemList(li[i].children[1].innerHTML)
            ul.removeChild(li[i]);
        }
    }
    console.log("*********8",dataItemList);
}

// event listner to display details of the selected task
function displayItem(){
    console.log("Display Button Clicked");
    var li1 = ul.children;
    for(i=0; i < li1.length ; i++){
        console.log("check 0");
        if(li1[i] && li1[i].children[0].checked){
            var obj = getDataItemList(li1[i].children[1].innerHTML);
            if (obj != null){
                displayList.push(obj);
                console.log("check 1");
                console.log("*********",displayList,obj);

            }
            

        }
    }

    displayData(displayList[0]);
    console.log("check 6")
    displayList.shift()
}

function displayData(displayListItem){
    console.log("check 4 ");
    console.log(displayListItem);
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p');
    let para4 = document.createElement('p');

    // const head1 = document.getElementById("titlehead");
    // const head2 = document.getElementById("descriptionhead");
    // const head3 = document.getElementById("datehead");
    // const head4 = document.getElementById("timehead");

    para1.textContent = displayListItem.titleDisplay;
    para2.textContent = displayListItem.descriptionDisplay;
    para3.textContent = displayListItem.dateDisplay;
    para4.textContent = displayListItem.timeDisplay;
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


function getDataItemList(titleDisplay){
    console.log("check 2");
    for(var j = 0; j < dataItemList.length;j++){
        if (dataItemList[j].title == titleDisplay){
            console.log("check 3");
            var titleDisplay = dataItemList[j].title;
            var descriptionDisplay =   dataItemList[j].description;
            var dateDisplay =    dataItemList[j].date;
            var timeDisplay =     dataItemList[j].time;
            return {
                titleDisplay,
                descriptionDisplay,
                dateDisplay,
                timeDisplay,
                


            };
        }
    }

}

function deleteDataItemList(titleRemoved){
    
    for(var j = 0;j<dataItemList.length;j++){
        
        if(dataItemList[j].title == titleRemoved ){
            console.log("here")
            dataItemList.splice(j,1);
        }
    }
    
}

// logic behind the hiding part of the add button and text fields

function displayHidden(){
    // var temp = document.getElementsByClassName("options");
     var x = document.getElementById("noDisplay");

    // Array.from(temp).forEach((x)=>{
        if(x.style.visibility=="hidden") {
            x.style.visibility = "visible";
        } else {
            x.style.visibility = "hidden";
        }

    // })
   
}
