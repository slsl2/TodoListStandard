import TodoItem from "./TodoItem.jsx";

const TodoList = ({ todos, setTodos }) => {
  const removeTodoItem = (id) => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return false;
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateIsDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <>
      <div className="todos-all">
        <div className="working-todos">
          <h2>Working</h2>
          <ul>
            {workingTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodoItem={removeTodoItem}
                updateIsDone={updateIsDone}
                isWorking={true}
              />
            ))}
          </ul>
        </div>
        <div className="done-todos">
          <h2>Done</h2>
          <ul>
            {doneTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodoItem={removeTodoItem}
                updateIsDone={updateIsDone}
                isWorking={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
