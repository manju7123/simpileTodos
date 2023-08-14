import './index.css'

const TodoItem = props => {
  const {todoItems, deleteTodo} = props
  const {id, title} = todoItems

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <div className="todo">
        <p className="title"> {title} </p>
        <div className="button-element">
          <button className="btn" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
