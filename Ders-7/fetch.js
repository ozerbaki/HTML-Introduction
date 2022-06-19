function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// fetchUsers();

async function asynFunctionUsers() {
    const Response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await Response.json();
    // console.log(users);

    render(users);
}

function render(users){
    const container = document.querySelector('.container');
    users.forEach(user => {
        const p = document.createElement('p');
        p.innerText = user.name + ' (' + user.username + ')';
        container.append(p);
    });
}


asynFunctionUsers();