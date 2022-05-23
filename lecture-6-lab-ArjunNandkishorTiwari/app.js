const content ="lorem ispem"

const addContent = (persons = []) => {
    const span = document.createElement('ol');
    persons.forEach(person => addPerson())
   
    span.textContent = content;
    const para = document.getElementById("content");
    para.appendChild(span);
}

const addPerson = (firstName,lastName, parent)=> {

    const li = document.createElement("li");
    li.classList.add("person");
    li.textContent = `${firstName} ${lastName}`;
    parent.appendChild(li);
    
}

const fetchData = () => {
    const xhr = new XMLHttpRequest;
    xhr.addEventListener('load',function(response){
        if(this.status == 200){
            const data = this.responseText;
            const persons = JSON.parse(data);
            addContent(persons); 
        }

    });

    xhr.open('GET','data/person.json');
    xhr.send();
}


const showBtn = document.getElementById("show-btn");
showBtn.addEventListener("click",showContent);