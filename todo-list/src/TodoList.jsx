// src/TodoList.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TodoList(){
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <motion.h1 initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}>
        To-Do List
      </motion.h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addTask}
        >
          Add
        </motion.button>
      </div>
      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            {task}
            <motion.button
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeTask(index)}
              className="delete-button"
            >
              ✖
            </motion.button> 
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TodoList;
