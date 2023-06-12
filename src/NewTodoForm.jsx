import { useState } from "react"

export function NewTodoForm(props) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return 
        props.onSubmit(newItem)
        setNewItem("") /* after adding a todo, it wipes out the input box */
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Add New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}