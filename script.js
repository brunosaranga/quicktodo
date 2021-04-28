const enter = document.getElementById('enter');
const clear = document.getElementById('clear');
const input = document.getElementById('item-input');
const ul = document.querySelector('ul');
const p = document.getElementById('info');


// CHECKING THE INPUT VALUE
function inputValue() {
    return input.value.length;
}


// DELETE BUTTON FUNCTION
function removeParent(evt){
	evt.target.parentNode.remove();
} 


// CREATING LIST ELEMENT (ITEM)
function createItem() {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // TOGGLE DONE
    ul.onclick = function(event){
		var target = event.target;
		target.classList.toggle('done');
	}

    // CREATING DELETE BUTTON
    const buttonOff = document.createElement('button'); 
    buttonOff.classList.add('button-delete')
	buttonOff.appendChild(document.createTextNode('x'));
	li.appendChild(buttonOff);
    // buttonOff.onclick = buttonOff.classList.toggle('button-delete-clicked');
	buttonOff.onclick = removeParent;

    // INFO TEXT DISAPPEARING 
    p.classList.add('info-invisible');
}





// FUNCTIONS FOR RESPECTIVE EVENTS
function addListAfterClick() {
    if (inputValue() > 0) {
        createItem();
    }
}
function addListAfterKeypress(event) {
    if (inputValue() > 0 && event.keyCode === 13) {
        createItem();
    }
}

function clearList() {
    // let ul1 = document.getElementsByClassName('ul');
    ul.innerHTML = "";
}



// EVENT LISTENERS
enter.addEventListener('click', addListAfterClick);
clear.addEventListener('click', clearList);
input.addEventListener('keypress', addListAfterKeypress);
