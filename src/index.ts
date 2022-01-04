import { getTodosByCount } from './search-form.js';

const num: number = parseInt(prompt('введите количество отображаемых ToDo'));

window.addEventListener('DOMContentLoaded', () => {
  getTodosByCount(num);
});
