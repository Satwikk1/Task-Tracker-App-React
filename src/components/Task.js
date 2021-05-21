// import Tasks from "./Tasks"
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder': ''}`} onDoubleClick={()=>(props.onToggle(props.task.id))}>
            <h3 >
                {/* here in onClick we have created a function first because if we pass the values directly to the onClick within parenthesis it will trigger the method instantly. not after onClick. use console.log to understand the concept */}
                {props.task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}  onClick={()=>props.onDelete(props.task.id)} />
            </h3>
            <div>
                {props.task.day}
            </div>
        </div>
    )
}

export default Task
