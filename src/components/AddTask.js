import { useState } from 'react'

const AddTask = (props) => {

    const addTask = (e)=>{
        e.preventDefault()

        if(!text){
            alert('Enter some text before submit')
            return
        }

        props.onAdd({text, day, reminder})
        setText("")
        setDay("")
        setReminder(false)


    }

    const [text, setText] = useState()
    const [day, setDay] = useState()
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form' onSubmit={addTask}>
            <div className='form-control'>
                <lable>Add task</lable>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <lable>Add Date and time</lable>
                <input type='text' placeholder='Add date and time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check'>
                <lable>Reminder</lable>
                <input checked={reminder} type='checkbox' value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input className='btn btn-block' type='submit' value='Save task'></input>
        </form>
    )
}

export default AddTask
