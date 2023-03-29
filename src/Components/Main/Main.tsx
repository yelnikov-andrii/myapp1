import React from 'react';
import { Container } from 'react-bootstrap';
import { Search } from './Search';
import Goods from './Goods';

export const Main = () => {

  return (
    <main className='main'>
      <Container>
        <h1 className='main__header'>
          Goods
        </h1>
        <Search />
        <Goods />
      </Container>
    </main>
  );
};

