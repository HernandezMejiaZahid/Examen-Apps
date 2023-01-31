import React from 'react';
import {  Route, Routes } from 'react-router-dom'

import MainHooks from './hooks/Main';


function App() {
  return (
    <div>
  
 <Routes>
        <Route path='/Hook' element={ <MainHooks/> } />
 </Routes>
    </div>
  );
}

export default App;