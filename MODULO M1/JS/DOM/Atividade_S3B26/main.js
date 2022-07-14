const shoppingList = document.getElementById('list')
const input = document.getElementById('input')
const addButton = document.getElementById('add')
const resetButton = document.getElementById('reset')

let list = [];

function reloadList(){
    shoppingList.innerHTML = ""; //Limpa nosso Elemento HTML
    for ( let index = 0 ; index < list.length; index ++){
        currentElement = list[index];
        currentElement.id = index;
        shoppingList.appendChild(currentElement);
    }
}

function createRemoveButton () {
    const removeButton =  document.createElement('button');
    removeButton.innerText= 'Remove';
    removeButton.addEventListener('click', (e) => {
        list = list.filter((_, index) => index !== Number(e.path[i].id));
        reloadList();
    });
    return removeButton;
}

function onClcikFunction() {
    let newItem = document.createElement('li');
    let paragraph = document.createElement('p');
    let removeButton = createRemoveButton();

    if(input.value) {
        paragraph.innerText = input.value;

        newItem.appendChild(paragraph);
        newItem.appendChild(removeButton);

        input.value = '';
        list.push(newItem);

        reloadList();
    }
}
addButton.addEventListener("click", onClcikFunction)

function onClickResectFunction() {
    shoppingList.innerHTML = "";
    list = [];
}
resetButton.addEventListener("click", onClickResectFunction)