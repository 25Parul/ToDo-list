const form = document.querySelector('form');
const input = document.querySelector('#newItem');
const addBtn = document.querySelector('#addBtn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("hey");
  const newItem = input.value.trim();
  if (newItem !== '') {
    todoList.add(newItem);
    input.value = '';
    renderList();
  }
});


class TodoList {
    constructor() {
      this.items = [];
    }
    
    add(item) {
      this.items.push(item);
    }
  
    delete(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  function renderList() {
    const todoListEl = document.querySelector('#todoList');
    todoListEl.innerHTML = '';
  
    todoList.items.forEach((item) => {
      const li = document.createElement('li');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        todoList.delete(item);
        renderList();
      });
      li.textContent = item;
      li.appendChild(deleteBtn);
      todoListEl.appendChild(li);
    });
  }
  
  const todoList = new TodoList();
  todoList.add('Buy milk');
  todoList.add('Do laundry');
  renderList();
  
  