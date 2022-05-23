import * as personService from './person-service';
import * as directory from './directory';
import '../scss/main.scss';







const persons = personService.list();
directory.build(persons);

// fetchData();














// const add = (data = []) => {
//     const ol = document.getElementById("list");
//     data.forEach(person => {
//         const li = document.createElement('li');
//         li.textContent - `${person.first_name} ${person.last_name}`;
//         ol.appendChild(li);

//     });

// }

// const url = 'data/persons.json';
// const promise = fetch(url,{
//     method: 'GET'

// });

// const fetchData = async () => {
//     const response = await promise;
//     const data = await response.json();
//     add(data);
// };



// // Promise
// //     .then(response => response.json())
// //     .then(data => add(data));

// fetchData();


