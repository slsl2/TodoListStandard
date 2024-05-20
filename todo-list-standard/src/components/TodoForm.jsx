import { useState } from "react";

function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const isDone = false;

  const HandleInputTitle = (event) => {
    setTitle(event.target.value);
  };
  const HandleInputContents = (event) => {
    setContents(event.target.value);
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용 모두 입력해주세요!");
      return;
    }
    setTodos((todos) => [
      ...todos,
      { id: Date.now(), title, contents, isDone },
    ]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <div>
        <form onSubmit={addTodoItem}>
          <input
            type="text"
            onChange={HandleInputTitle}
            value={title}
            placeholder="제목"
          ></input>
          <input
            type="text"
            onChange={HandleInputContents}
            value={contents}
            placeholder="내용"
          ></input>
          <button type="submit">추가하기</button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
