import React from 'react';

const TodoList = ({dataList, removeData}) => (
    <ul>
        {dataList.map(item => <li key={item.id} onClick={() => removeData(item.id)}>{item.text}</li>)}
    </ul>
);

export default TodoList;