import { useTodoStore } from '../store/todoStore';

const TaskDisplay = () => {
  const tasks = useTodoStore((state) => state.tasks);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ margin: '5px 0' }}>
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TaskDisplay;