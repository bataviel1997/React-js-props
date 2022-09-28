import React from 'react';
import MyButton from './components/MyButton';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <div>
      <h1> List Belanja</h1>
      <MyButton
        content={'login'}
        bgColor="red"
        color="white"
        onClick={() => {
          console.info('login clicked');
        }}
      />

      <MyButton
        content={'home'}
        bgColor="blue"
        color="white"
        onClick={() => {
          console.info('Home clicked');
        }}
      />

      <MyButton
        content={'register'}
        bgColor="orange"
        color="white"
        onClick={() => {
          console.info('register clicked');
        }}
      />

      <MyButton
        content={'logout'}
        bgColor="grey"
        color="white"
        onClick={() => {
          console.info('logout clicked');
        }}
      />
      <ProductCard
        image={
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'
        }
        name={'Tas Kulit Buaya'}
        price={'500.000'}
      />

      <ProductCard
        image={
          'https://images.pexels.com/photos/1138347/pexels-photo-1138347.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1'
        }
        name={'Lensa Fix'}
        price={'200.000'}
      />
    </div>
  );
}
