import { Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}

export default App;
