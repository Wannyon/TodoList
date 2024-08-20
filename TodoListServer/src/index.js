const express = require('express');
const cors = require('cors');

const todoRoute = require('./routes/todoRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;