let todos = [];

const getAllTodos = () => {
    return todos;
};

const deleteTodo = (id) => {
    return todos = todos.filter(todo => todo.id !== id);
};

module.exports = {
    getAllTodos,
    async addTodo(text) {
        const todo = { id: Date.now(), text };
        todos.push(todo);
    },
    deleteTodo
}