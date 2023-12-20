//코드에 영향이 있지 않아요~ 실습용 파일
let todoItems: Todo[];

interface Todo{
  id: number;
  title: string;
  done: boolean;
}
// api
function fetchTodoItems():Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

function addTodo(todo:Todo):void {
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo:Todo):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():Todo {
  return todoItems[0];
}

function showCompleted():Todo[] {
  return todoItems.filter(item => item.done);
}

todoItems = fetchTodoItems();