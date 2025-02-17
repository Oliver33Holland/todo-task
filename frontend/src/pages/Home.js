import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos"
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo"
const Home = () => {
    const [todos, setTodos] = useState([])

    const deleteHandler = async (todo) => {
      
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])

    if (!todos) return <h1>loading...</h1>
    return (
        <div>
            <>
                {
                    todos ? todos.map((todo) => <Card key={todo._id} deleteHandler={deleteHandler} todo={todo}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Home

/*
import { useEffect, useState } from "react";
import { readTodos } from "../api/readTodos";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";
const Home = () => {
    const [todos, setTodos] = useState([])


    const deleteHandler = async (todo) => {
        let response = await deleteTodo(todo)
        console.log(response)
        let newToDos = [...todos]
        newToDos.filter(toDo => toDo._id != response._id)
        setTodos(newToDos)
        alert("Item deleted!")
      
    }
    useEffect(() => {
        const fetchTodos = async () => {
            let data = await readTodos()
            setTodos(data.todos)
            console.log(data.message)
        }
        fetchTodos()
    }, [])

    if (!todos) return <h1>loading...</h1>
    return (
        <div>
            <>
                {
                    todos ? todos.map((todo) => <Card key={todo._id} deleteHandler={deleteHandler} todo={todo}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Home
*/