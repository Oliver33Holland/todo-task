const API_URL = `http://localhost:4000`

export const readTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos/items`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch todos')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}