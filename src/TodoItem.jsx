export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
              <label id="todos">
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
              </label>
              <button onClick={() => deleteTodo(id)} className="btn btn-danger" id="del">Delete</button>
            </li>
    )
}