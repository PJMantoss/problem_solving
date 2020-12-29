/*
Call on JSON placeholder api, get 10 users, implement a function getUsers() that returns
only names and emails of the users whose name contains letter k.
*/

const getUsers = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(api);
    const json = await response.json();

    const result = json.filter(v >= v.name.toLowerCase().includes('k'));

    console.log(result);
}

getUsers();