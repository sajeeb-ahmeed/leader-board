const topPlayers = document.getElementById('top-players');
topPlayers.style.color = 'rgb(0 119 138 / 72%) ';

const topBlogs = document.getElementById('top-Blogs');
topBlogs.style.color = 'rgb(0 119 138 / 72%) ';


let players = document.getElementsByClassName('players');
for (let player of players) {
    player.style.backgroundColor = 'rgb(234 234 234)'
    player.style.color = 'rgb(4 16 17 / 72%)';
    player.style.padding = '5px'
    player.style.borderRadius = '10px'
}



function addItemBtn() {
    const ulItem = document.getElementById('ul-parent');
    const newElement = document.createElement('li');
    newElement.innerText = " This Is a New List Item Added From JavaScript  "
    document.getElementById('ul').appendChild(newElement);


}

// function count() {
//     const input = document.getElementById('inputField');
//     let inputField = input.value;
//     inputField = inputField + 1
//     console.log(inputField);
//     //  n inputField;
//     return inputField;

// }

// // let inputField = 0;

function addValue(e) {
    const input = document.getElementById('inputField');
    let inputField = parseInt(input.value);

    if (inputField < 5) {
        inputField = inputField + 1;
        input.value = inputField;
        console.log(inputField);
    } else {
        const btn = document.getElementById('add');
        btn.className = 'disabled'
        btn.innerText = 'disabled'
    }
}

// document.getElementById('add').addEventListener('click', function () {
//     const input = document.getElementById('inputField');
//     let inputField = parseInt(input.value);
//     inputField = inputField + 1;
//     input.value = inputField;
//     console.log(inputField);

// })