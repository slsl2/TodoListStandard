const TodoItem = ({ todo, removeTodoItem, updateIsDone, isWorking }) => {
  return (
    <>
      <li className={isWorking ? "working-li" : "done-li"} key={todo.id}>
        <div>
          <p className="todo-title">{todo.title}</p>
          <p className="todo-contents">{todo.contents}</p>
        </div>
        <div>
          <button
            className={isWorking ? "btn-to-done" : "btn-to-working"}
            onClick={() => updateIsDone(todo.id)}
          >
            {isWorking ? "완료" : "취소"}
          </button>
          <button onClick={() => removeTodoItem(todo.id)}>삭제하기</button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
