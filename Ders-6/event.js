const btn = document.querySelector('#btn');
console.log(btn);

// btn.addEventListener('click', function (){
//     alert('button Clicked!');
// })

//eventListener ile tüm event'leri ekleyebiliriz.
//https://vuetifyjs.com/en/api/v-btn/#sass

btn.addEventListener('click', function(){
    const title = document.querySelector('.title');
    title.innerHTML = 'Mouse Clicked!!';
    title.classList.toggle('red');
});


const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

usernameInput.addEventListener('input',function () {
    const usernameText = document.querySelector('#username-text');
    usernameText.innerHTML = usernameInput.value;
});

passwordInput.addEventListener('input', function (event) {
    // console.log(event);
    const passwordText = document.querySelector('#password-text');
    passwordText.innerHTML = event.target.value;
});

const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);
})