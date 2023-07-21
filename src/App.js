import './App.css';
import {Route, Routes , Navigate } from 'react-router-dom';
import Store from './Components/Store';

function App() {
  return (
   <Routes>
    <Route path='/products' element={<Store />} />
    <Route path='/*' element={<Navigate to='/products'/>} />
   </Routes>

  );
}

export default App;
