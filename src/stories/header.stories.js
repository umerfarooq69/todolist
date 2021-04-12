import React from 'react';
import Header from '../component/Header';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Header',
  component: Header,
};

const Template = () => <Header title={'TODO LIST'} />;

export const HeaderItem = Template.bind({});

