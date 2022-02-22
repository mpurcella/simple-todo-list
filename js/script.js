// Add New Todo
let addTodoBtn = document.querySelector('.todo-list-form-add-btn');

addTodoBtn.addEventListener('click', (e) => {
	e.preventDefault();
	addTodo();
	clearTodoInputValue();
});

let addTodo = () => {
	let todoList = document.querySelector('.todo-list');
	let todoInput = document.querySelector('.todo-list-form-input');

	let newTodo = document.createElement('li');
	newTodo.classList = 'todo-list-item';

	if (todoInput.value.length < 1) {
		return;
	} else {
		newTodo.innerHTML = `
					<div class="todo-list-item-view">
						<div class="todo-list-item-view-left">
							<input type="checkbox" class="todo-list-item-checkbox" />
							<p class="todo-list-item-text">${todoInput.value}</p>
						</div>
						<div class="todo-list-item-view-right">
							<button type="button" class="todo-list-item-edit-btn">
							</button>
							<button type="button" class="todo-list-item-remove-btn">
							</button>
						</div>
					</div>
					<div class="todo-list-item-edit hide">
						<input type="text" class="todo-list-item-edit-input" placeholder='Update Your To-Do...' />
						<div class="todo-list-item-edit-btns">
							<button type="button" class="todo-list-item-confirm-edit-btn"></button>
							<button type="button" class="todo-list-item-cancel-edit-btn"></button>
						</div>
					</div>
		`;
		todoList.appendChild(newTodo);
		newTodo.querySelector('.todo-list-item-remove-btn').addEventListener('click', removeTodo);
		newTodo.querySelector('.todo-list-item-checkbox').addEventListener('change', strikethroughTodo);
		newTodo.querySelector('.todo-list-item-edit-btn').addEventListener('click', editTodo);
		newTodo.querySelector('.todo-list-item-confirm-edit-btn').addEventListener('click', updateTodo);
		newTodo.querySelector('.todo-list-item-cancel-edit-btn').addEventListener('click', cancelEdit);
	}
};

// Clear Todo Input Value
let clearTodoInputValue = () => {
	let todoInput = document.querySelector('.todo-list-form-input');
	todoInput.value = '';
};

// Remove Todo Button
let removeTodo = (e) => {
	e.target.parentElement.parentElement.parentElement.remove();
};

// Strikethrough Todo Button
let strikethroughTodo = (e) => {
	e.target.nextElementSibling.classList.toggle('completed');
};

// Edit Todo Button
let editTodo = (e) => {
	e.target.parentElement.parentElement.classList.add('hide');
	e.target.parentElement.parentElement.nextElementSibling.classList.remove('hide');
};

// Update Todo Function
let updateTodo = (e) => {
	let todo = document.querySelector('.todo-list-item-text');
	let todoEditInput = document.querySelector('.todo-list-item-edit-input');

	if (todoEditInput.value.length < 1) {
		return;
	} else {
		todo.innerText = todoEditInput.value;
	}

	e.target.parentElement.parentElement.classList.add('hide');
	e.target.parentElement.parentElement.previousElementSibling.classList.remove('hide');
	e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].checked = false;
	e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].nextElementSibling.classList.remove(
		'completed'
	);
	todoEditInput.value = '';
};

// Cancel Edit Button
let cancelEdit = (e) => {
	e.target.parentElement.parentElement.classList.add('hide');
	e.target.parentElement.parentElement.previousElementSibling.classList.remove('hide');
};
