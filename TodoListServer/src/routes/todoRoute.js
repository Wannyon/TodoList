const express = require('express');
const TodoRepository = require('../repository/todoRepository');
const TodoService = require('../service/todoService');

const todoService = new TodoService(TodoRepository);
const router = express.Router();

// todo 받아오기
router.get('/', (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
});

// todo add
router.post('/', (req, res) => {
    const { text } = req.body;
    const newTodo = todoService.createTodo(text);
    res.status(201).json(newTodo);
});

// todo remove
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log('delete ID:', req.params);
    todoService.removeTodo(parseInt(id));
    res.status(204).end();
});

module.exports = router;