const input = document.getElementById('input-field');
const addButton = document.getElementById('add-btn');
let listContainer = document.getElementById('js-list-container');

function addTask() {
    if (input.value.trim() === '') {
        alert('Please write something before adding');
    }
    else {
        listContainer.innerHTML += 
        `
        <div class="list-item">
        <h3> ${input.value} </h3>
        <button class="del-btn"> Delete </button>
        </div>
        `;
        input.value = '';
        
        const deleteButtons = Array.from(document.getElementsByClassName('del-btn'));
        deleteButtons.forEach((button) => {
            button.addEventListener('click', deleteTask);
        });
    }
}

function deleteTask() {
    const listItem = this.closest('.list-item');
    listItem.remove();
}

function handleEvents() {
    addButton.addEventListener('click', addTask);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTask();
    });
}

handleEvents();