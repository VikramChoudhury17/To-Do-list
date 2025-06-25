import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ tasks, deleteTask, toggleComplete, editTask, toggleEdit }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;