import { useTodoStore } from '../store/todoStore';

const DeleteButtons = () => {
  const { tasks, deleteTask } = useTodoStore();

  return (
    <div>
      {tasks.map((_, index) => (
        <button
          key={index}
          onClick={() => deleteTask(index)}
          style={{ margin: '5px', color: 'red' }}
        >
          ลบงานที่ {index + 1}
        </button>
      ))}
    </div>
  );
};

export default DeleteButtons;