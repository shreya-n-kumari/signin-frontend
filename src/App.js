import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <h6 className='text-center'>Registration Form</h6>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
