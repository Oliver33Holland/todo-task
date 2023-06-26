const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {

    try {
        const response = await fetch(`${API_URL}/todos/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch todo')
        }
        const todo = await response.json()
        return todo
      } catch (error) {
        console.error(error)
        throw error;
      }
}