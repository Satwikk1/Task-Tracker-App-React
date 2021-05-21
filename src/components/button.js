import PropTypes from 'prop-types';


const Button = (props) => {
    return (
        <div>
            {/* can define onClick method in this arrow function, define onClick method attr. in button tag, and write the method */}
            <button onClick={props.onClick} className={props.class} style={{ 
                backgroundColor: props.bgColor,
                color: props.color,
            }}>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    bgColor: 'black',
    text: 'button',
    class: 'btn',
    color: 'white',
}

Button.propTypes={
    onClick: PropTypes.func,
}

export default Button
