const API_URL = `http://localhost:4000`

export const deleteTodo = async (todo) => {
  try {
    const response = await fetch(`${API_URL}/todos/${todo._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
