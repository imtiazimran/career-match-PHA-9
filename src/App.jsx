import { Outlet } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
