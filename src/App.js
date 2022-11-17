import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindService from './components/FindService';
import Main from './components/Main';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" exact element={ <Main /> } />
          <Route path="/:id/details" exact element={ <FindService returnLink="/" /> } />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>      
    </BrowserRouter>
  );
}

export default App;
