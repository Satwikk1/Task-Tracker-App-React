import Task from './Task'


const Tasks = (props) => {

    return (
        <div>
            {props.tasks.map( (task)=>(
                <Task key={task.id} task={task} onToggle={props.onToggle} onDelete={props.onDelete}/>
            ) )}
        </div>
    )
}

export default Tasks
