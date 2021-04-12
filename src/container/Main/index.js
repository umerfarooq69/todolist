import React, { useEffect, useState } from 'react'
import '../../App.css';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import AddForm from '../../component/AddForm'
import TodoList from '../../component/TodoList'
import { StaticData } from '../../StaticData'
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss'

export default function Main() {
    const [todoListArray, settodoListArray] = useState([])
    const [inputValue, setinputValue] = useState('')

    useEffect(() => {
        settodoListArray(StaticData.itemList)
    })

    const removeFromArray = (id) => {
        let allData = todoListArray.splice(id, 1)
        settodoListArray(allData)
    }

    const onChangeInput = (e) => {
        const val = e.target.value
        setinputValue(val)
    }

    const addItem = () => {
        if (inputValue != '') {
            let item = { text: inputValue }
            let addData = todoListArray.push(item)
            settodoListArray(addData)
            setinputValue('')
        }
    }

    return (
        <div className="App">
            <div className='main-section'>
                <div className='aligment'>
                    {/* Header Component */}
                    <Header title={'TODO LIST'} />

                    {/* Add Form Component */}
                    <AddForm
                        onChange={onChangeInput}
                        addItem={addItem}
                        inputValue={inputValue}
                    />

                    {/* TODO List Tile Component */}
                    <div className='main-list-wrap'>
                        {
                            todoListArray && todoListArray.length > 0 ?
                                todoListArray.map((item, index) => { return <TodoList data={item} index={index} removeFromArray={removeFromArray} key={index} /> })
                                :
                                <p className='text-center'>No Item Found!!</p>
                        }
                    </div>

                    {/*Footer Component */}
                    <Footer totalCount={todoListArray.length} />
                </div>
            </div>
        </div>
    );
}