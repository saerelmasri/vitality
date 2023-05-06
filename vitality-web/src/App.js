import { Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/Register/Register';
import ExtraInfo from './Pages/ExtraInfo/ExtraInfoPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/extra_info' element={<ExtraInfo/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
