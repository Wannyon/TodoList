import React from 'react';

function TodoItem({ item, onDelete }) {
    return (
        <div>
            <span>{ item.text }</span>
            <button onClick={ () => onDelete(item.id) }>Delete</button>
        </div>
    );
}

export default TodoItem;