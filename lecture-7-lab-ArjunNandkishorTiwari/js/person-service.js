const url = 'data/persons.json';

export const list = async () => {
    const promise = fetch(url, {
        method : 'GET'
    });
    const response = await promise;
    const data = await response.json();
    const persons = [];
    data.array.forEach(element => {
        const person = getPerson(element.first_name, element.last_name);
        persons.push(getPerson(element.first_name, element.last_name));
        
    });
};