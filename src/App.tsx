
import './App.css'
import CourseDrop from './component/CourseDrop'
import CourseForm from './component/CourseForm'
import CourseList from './component/CourseList'
//import AddTask from './component/AddTask'
//import DeleteButtons from './component/DeleteButtons'
//import TaskDisplay from './component/TaskDisplay'
//import TaskList from './component/TaskList'
//import CounterDec from './component/CounterDec'
//import CounterInc from './component/CounterInc'
//import CounterScore from './component/CounterScore'
//import TodoList from './component/TaskList'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CounterScore /> */}

        {/* <CounterInc /> */}
        {/* <CounterInc /> */}

        {/* <CounterDec /> */}

        {/* <AddTask /> */}
        {/* <DeleteButtons /> */}
        {/* <TaskDisplay /> */}
        <>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      </>

      </div>
    </>
  )
}

export default App
