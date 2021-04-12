import React from 'react';
import AddTodo from '../component/AddForm';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'AddTodo',
  component: AddTodo,
};

const onChangeInput = (e) => {
  const val = e.target.value
  console.log('onChange Value =>', val)
}

const addItem = () => {
  console.log('Add Item Function')
}

const Template = () => <AddTodo
  onChange={onChangeInput}
  addItem={addItem}
  inputValue={'Item Value'}
/>;

export const AddTodoItem = Template.bind({});

