import React, { useState } from "react"
import { addTodo } from "../api/addTodo"

const AddTodo = () => {
  const [userInput, setUserInput] = useState("")

  const handler = async (e) => {
    e.preventDefault()
    
    try {
      const response = await addTodo(userInput)
      console.log(response)
    
      setUserInput("")
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handler}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddTodo
