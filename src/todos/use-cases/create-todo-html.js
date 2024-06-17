import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 * @returns 
 */


export const createTodoHTML = (todo) => {
    if(!todo) throw new Error('A todo objetois required');
    const {done,description,id} = todo;
    const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked': ''}>
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;

    const liElment = document.createElement('li');
    liElment.innerHTML= html;
    liElment.setAttribute('data-id' , id);

    if(todo.done)
        liElment.classList.add('completed');

    return liElment;
}