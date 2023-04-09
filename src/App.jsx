import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import JobCategory from './components/JobCategory/JobCategory'

function App() {
  return (
    <div className="App">
      <Home></Home>
      <JobCategory></JobCategory>
      <Outlet></Outlet>
    </div>
  )
}

export default App
