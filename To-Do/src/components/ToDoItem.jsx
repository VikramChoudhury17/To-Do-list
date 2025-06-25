import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleComplete, editTask, toggleEdit }) {
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, editText);
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {task.editing ? (
        <>
        
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div><button onClick={handleEdit}>Save</button>
          </div>  
        </>
      ) : (
        <>
        
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <div>
          <button onClick={() => toggleEdit(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button className='not-button'onClick={() => toggleComplete(task.id)}>{task.completed?"❌":"✔️"}</button>
          </div>
        </>
      )}
      
    </li>
  );
}

export default ToDoItem;