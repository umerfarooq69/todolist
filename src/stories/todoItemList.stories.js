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
const MultiTemplate = () => 
<div>
<TodoList data={StaticData.itemList[0]} index={0}  key={0} removeFromArray={removeFromArray}/>
<TodoList data={StaticData.itemList[1]} index={1}  key={1} removeFromArray={removeFromArray}/>
<TodoList data={{text: 'Item 3'}} index={2}  key={2} removeFromArray={removeFromArray}/>
</div>;

export const DefaultView = Template.bind({});
export const OneORMoreList = MultiTemplate.bind({});

