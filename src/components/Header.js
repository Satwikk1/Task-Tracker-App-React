import Button from './button'
// impt
import PropTypes from 'prop-types'


// rafce
const Header = (props) => {

    return (
        <header className='header'>
            {/* to style this element within this file, can 
            also create a seperate var 
            "variable" of type object */}
            {/* <h1 style={{
                color: 'red',
                backgroundColor: 'black',
            }}>This is styles example</h1> */}
            <h1>{props.title}</h1>
            { props.addTaskForm? <Button onClick={props.onAddTaskFormToggle} bgColor='red' text='Close'/> :<Button onClick={props.onAddTaskFormToggle} bgColor='green' text='Add'/>}
        </header>
    )
}

// made default props
Header.defaultProps = {
    title: "Task Traker",
}

// set default variable types to props
Header.propTypes = {
    title: PropTypes.string.isRequired,  
}
export default Header



