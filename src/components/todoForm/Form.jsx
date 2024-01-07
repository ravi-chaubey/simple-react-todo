import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Form.module.css'

function Form({ onAdd, onUpdate, formValues, isEditing }) {
  const [task, setTask] = useState(''); 

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() !== '') {
      const newTask = {
        id: formValues.id || Number(Math.floor(Math.random() * 10000)), 
        text: task,
      };

      if (isEditing) {
        newTask.index = formValues.index;
        onUpdate(newTask); 
      } else {
        onAdd(newTask); 
      }

      setTask('');
    }
  };

  useEffect(() => {
    setTask(formValues.text || '');
  }, [formValues]);
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className={styles.form_taskInput} type="text" value={task} onChange={handleInput} />
        <button className={styles.form_addButton} type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
    </>
  );
}

export default Form;
