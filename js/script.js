// Add New Todo
let addTodoBtn = document.querySelector('.todo-list-form-add-btn');

addTodoBtn.addEventListener('click', (e) => {
	e.preventDefault();
	addTodo();
	clearTodoInputValue();
});

let addTodo = () => {
	let todoList = document.querySelector('.todo-list-list');
	let todoInput = document.querySelector('.todo-list-form-input');
	let newTodo = document.createElement('li');
	newTodo.classList = 'todo-list-list-item';
	if (todoInput.value.length < 1) {
		return;
	} else {
		newTodo.innerHTML = `
		<div class="todo-list-list-item-left">
							<input type="checkbox" name="" class="todo-list-list-item-checkbox" />
							<p class="todo-list-list-item-text">${todoInput.value}</p>
							<input
								type="text"
								name=""
								class="todo-list-list-input-update"
								placeholder="Update Your Todo..."
							/>
						</div>
						<div class="todo-list-list-item-right">
							<button type="button" class="todo-list-list-item-update-btn update"></button>
							<button type="button" class="todo-list-list-item-remove-btn"></button>
						</div>
		`;
		todoList.appendChild(newTodo);
		newTodo.querySelector('.todo-list-list-item-remove-btn').addEventListener('click', removeTodo);
		newTodo.querySelector('.todo-list-list-item-checkbox').addEventListener('change', strikethroughTodo);
		newTodo.querySelector('.todo-list-list-item-update-btn').addEventListener('click', updateTodo);
	}
};

// Clear Todo Input value
let clearTodoInputValue = () => {
	let todoInput = document.querySelector('.todo-list-form-input');
	todoInput.value = '';
};

// Remove Todo Function
let removeTodo = (e) => {
	console.log(e);
	e.target.parentElement.parentElement.remove();
};

// Strikethrough Todo
let strikethroughTodo = (e) => {
	e.target.nextElementSibling.classList.toggle('completed');
};

// Update Todo
let updateTodo = (e) => {
	let todo = e.target.parentElement.previousElementSibling.children[1];
	let todoUpdate = e.target.parentElement.previousElementSibling.children[2];

	e.target.classList.toggle('confirm');
	e.target.parentElement.previousElementSibling.children[1].classList.toggle('hide');
	e.target.parentElement.previousElementSibling.children[2].classList.toggle('show');

	if (todoUpdate.value.length < 1) {
		return;
	} else {
		todo.innerText = todoUpdate.value;
	}
};
