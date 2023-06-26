const API_URL = `http://localhost:4000`

export const updateTodo = async (todo) => {
  try {
    const response = await fetch(`${API_URL}/todos/items/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: todo.text }), 
    });

    if (!response.ok) {
      throw new Error('Failed to update todo')
    }

    const json = await response.json()
    return json;
  } catch (error) {
    console.error(error)
    throw error
  }
}