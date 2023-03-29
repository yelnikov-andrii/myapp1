import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { NewGood } from './Components/NewGood/NewGood';
import { Footer } from './Components/Foooter/Footer';
import { Routes, Route } from 'react-router-dom';
import { useGetProductFromServer } from './api/useGetProductFromServer';
import { Home } from './Components/Home/Home';
import { Good } from './Components/Good/Good';

function App() {
  useGetProductFromServer();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/goods" element={<Main />}>
        </Route>
        <Route path="/goods/:id" element={<Good />}>
        </Route>
        <Route path='/new-good' element={<NewGood />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
