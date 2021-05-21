import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'



function App() {

  // eslint-disable-next-line
  const [addTaskForm, setAddTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoint.',
        day: 'tomorrow',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
])

  // Delete Task
  const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder=(id)=>{
      setTasks(
        tasks.map((task)=> task.id === id? {...task, reminder: !task.reminder}: task)
      )
  }

  const addTask = (task)=>{
    const id = tasks.length+1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask]) 
  }

  const addTaskFormToggle = ()=>{
    setAddTaskForm(!addTaskForm)
  }
  return (
    <div className="container">
      <Header onAddTaskFormToggle={addTaskFormToggle} title="Task Tracker" /> 
      {addTaskForm && <AddTask onAdd={addTask}/>}
      { tasks.length>0? (<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />): ("No Tasks to Show")}
    </div>
  );
}

export default App;
