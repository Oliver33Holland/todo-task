const API_URL = `http://localhost:4000`

export const addTodo = async (todo) => {
  try {
    const obj = {
      text: todo.text 
    };

    const response = await fetch(`${API_URL}/todos`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to add todo')
    }

    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
    throw error
  }
}