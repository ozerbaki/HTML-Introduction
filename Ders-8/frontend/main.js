//veriyi yakaladık
const userList = document.querySelector('.user-list');
const userForm = document.querySelector('#user-form');
const nameInput = document.querySelector('#name-input');


// GET-User
async function fetchUsers() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    render(users);
}
// html sayfaya verileri basmak için kullandık
function render(users){
    userList.innerText = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerText = user.name;

        userList.append(li);
    });
}


//POST- Save user

async function saveUser(event) {
    event.preventDefault(); // postback yapmayı engeller

    const name = nameInput.value;
    const formData = {name}; // name : name Key ve value değerleri aynı değişken ismine sahip olduğunda bu şekilde de yazabilriz.

    const response = await fetch('http://localhost:3000/users',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'content-type': 'application/json'}
    });

    const data = await response.json();
    
    render(data);
}


fetchUsers();

userForm.addEventListener('submit', saveUser);