import React from 'react';
import Footer from '../component/Footer';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = () => <Footer  totalCount={'2'} />;

export const ItemCounts = Template.bind({});

