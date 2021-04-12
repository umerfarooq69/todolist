import React from 'react';
import TodoList from '../component/TodoList';
import { StaticData } from '../StaticData'
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Todo List Tile',
  component: TodoList,
};

const removeFromArray = (id) => {
  console.log('ID === item.id ? REMOVE DATA : empty')
}

const Template = () => <TodoList data={StaticData.itemList[0]} index={0}  key={0} removeFromArray={removeFromArray}/>;

export const TodoListItem = Template.bind({});

