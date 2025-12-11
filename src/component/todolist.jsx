import { useState } from "react";


export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (!text.trim()) return;
    if (editId) {
      setTodos(todos.map(t => t.id === editId ? { ...t, title: text } : t));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), title: text }]);
    }
    setText("");
  };

  const deleteTodo = id => setTodos(todos.filter(t => t.id !== id));
  const startEdit = todo => {
    setEditId(todo.id);
    setText(todo.title);
  };

  return (
    <div className="app">
      <h2>Todo List</h2>
      <div className="input-row">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTodo}>{editId ? "Update" : "Add"}</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <div className="actions">
              <button onClick={() => startEdit(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
