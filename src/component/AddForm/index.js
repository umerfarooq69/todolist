import React from 'react'
import './style.scss'

const AddForm = (props) => {
    const { onChange, inputValue, addItem } = props
    return (
        <form>
            <div className='form-block'>
                <input className='form-control' value={inputValue} placeholder="Add Item..." onChange={(e) => { onChange(e) }} />
                <span className='btn' onClick={() => {addItem()}}>Add</span>
            </div>
        </form>
    )
}
export default AddForm