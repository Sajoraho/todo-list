import './styles.css'

import { Todo, TodoList } from './classes' //Busca index.js por defecto
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList()

todoList.todos.forEach(todo => crearTodoHtml(todo))

// const tarea = new Todo('Aprender Javascript')
// todoList.nuevoTodo(tarea)

// crearTodoHtml(tarea)

// localStorage.setItem('mi-key', 'ABC123')