import { Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/Register/Register';
import Extra_info from './Pages/ExtraInfo/ExtraInfoPage';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/extra_info' element={<Extra_info/>}/>
    </Routes>
  );
}

export default App;
