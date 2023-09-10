//Задача 1
// document.querySelector("form").addEventListener('submit', function(event) {
//     event.preventDefault();

//     var firstName = document.querySelector('#firstName').value;
//     var lastName = document.querySelector('#lastName').value;
//     var age = document.querySelector('#age').value;

//     console.log('Имя пользователя:', firstName);
//     console.log('Фамилия пользователя:', lastName);
//     console.log('Возраст пользователя:', age);
// });

//Задача 2 Продолжение первой задачи
// let users = [];

// document.querySelector("form").addEventListener('submit', function(event) {
//     event.preventDefault();

//     var firstName = document.querySelector('#firstName').value;
//     var lastName = document.querySelector('#lastName').value;
//     var age = document.querySelector('#age').value;

//     var user = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//     };
//     users.push(user);

// document.querySelector('#firstName').value = '';
//     document.querySelector('#lastName').value = '';
//     document.querySelector('#age').value = '';

// console.log('Массив пользователей:', users);
   
// });



//Задача 3 Продолжение второй задачи
// function rerender() {
//     const cardsContainer = document.querySelector('#userCards')
//     cardsContainer.innerHTML = '';
//     for(let i = 0; i < users.length; i++) {
//         const user = users[i]
//         const card = document.createElement('div')
//         card.innerHTML = `
//         <h2>${user.firstName} ${user.lastName}</h2>
//             <p>Возраст: ${user.age}</p>`;
//             cardsContainer.appendChild(card);
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     rerender();
// } )

// let users = [];

// document.querySelector("form").addEventListener('submit', function(event) {
//     event.preventDefault();

//     var firstName = document.querySelector('#firstName').value;
//     var lastName = document.querySelector('#lastName').value;
//     var age = document.querySelector('#age').value;

//     var user = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//     };
//     users.push(user);

// document.querySelector('#firstName').value = '';
//     document.querySelector('#lastName').value = '';
//     document.querySelector('#age').value = '';

// rerender();
   
// });


//Задача 4 Продолжение третьей задачи

function rerender() {
    const cardsContainer = document.querySelector('#userCards')
    cardsContainer.innerHTML = '';
    for(let i = 0; i < users.length; i++) {
        const user = users[i]
        const card = document.createElement('div');
card.dataset.id = user.id;
card.innerHTML = `
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>Возраст: ${user.age}</p>
`;
cardsContainer.appendChild(card);

card.addEventListener('dblclick', function() {
    deleteUser(user.id);
    rerender();
});

    }}


function deleteUser(userId) {
users = users.filter(user => user.id !== userId);
}

document.addEventListener('DOMContentLoaded', function() {
rerender();
});

let users = [];

document.querySelector("form").addEventListener('submit', function(event) {
event.preventDefault();

var firstName = document.querySelector('#firstName').value;
var lastName = document.querySelector('#lastName').value;
var age = document.querySelector('#age').value;

var user = {
id: Date.now(),
firstName: firstName,
lastName: lastName,
age: age
};
users.push(user);

document.querySelector('#firstName').value = '';
document.querySelector('#lastName').value = '';
document.querySelector('#age').value = '';

rerender();
});







