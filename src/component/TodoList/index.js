import React from 'react'
import './style.scss'

const TodoList = (props) => {
    const { data, removeFromArray, index } = props
    return (
        <div>
            <div className='list-main'>
                <p>{index + 1}) {data.text} <span onClick={() => {removeFromArray(index)}}>X</span></p>
            </div>
        </div>
    )
}
export default TodoList