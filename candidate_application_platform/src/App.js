
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import IsLoggedIn from './components/IsLoggedIn';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">


       <Routes>

       <Route element={<IsLoggedIn/>}>
          <Route path='/'  element={<Home/>}/>
          </Route>

          <Route  path='/login'  element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>

          

       </Routes>

       <ToastContainer />
    </div>
  );
}

export default App;
