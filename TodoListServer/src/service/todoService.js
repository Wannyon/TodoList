class TodoService {
    constructor(todoRepo) {
        this.todoRepo = todoRepo;
    }

    getTodos() {
        return this.todoRepo.getAllTodos();
    };

    createTodo(text) {
        return this.todoRepo.addTodo(text);
    };

    removeTodo(id) {
        this.todoRepo.deleteTodo(id);
    }
}

module.exports = TodoService;