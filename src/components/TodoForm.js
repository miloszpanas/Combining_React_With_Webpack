import React from 'react';

const TodoForm = props => (
    <form onSubmit={(e) => {
        const inputEl = e.target.querySelector('input');
        e.preventDefault();
        props.submitHandler(inputEl.value);
        inputEl.value = '';
    }}>
        <div>
            <label>Task:</label>
            <input />
        </div>
    </form>
);

export default TodoForm;
