import { useState } from "react"

const AddTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handler = async (e) => {
        e.preventDefault()
        // what function will run?
        let response = await 
        console.log(response)
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={() => {}}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo