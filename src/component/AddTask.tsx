import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';

const AddTask = () => {
  const [task, setTask] = useState('');
  const addTask = useTodoStore((state) => state.addTask);

  const handleAdd = () => {
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="พิมพ์งานที่ต้องทำ..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;