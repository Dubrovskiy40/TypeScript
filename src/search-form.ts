import { renderBlock } from './lib.js'

export function getTodosByCount (count: number) {
  const API: string = 'https://jsonplaceholder.typicode.com/todos';

  fetch(`${API}?_limit=${count}`)
    .then(response => response.json())
    .then(data => console.log(data))

  renderBlock(
    'api',
    `
    <div>
        <h2>${count} элементов вывели в консоль</h2>
   
    `
  )
}

