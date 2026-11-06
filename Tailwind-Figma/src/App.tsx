import './App.css'
import MiniDashboard from './components/MiniDashboard'
import ProfileCard from './components/ProfileCard'

function App() {


  return (
    <div className='p-2 bg-amber-100 justify-items-center'>
      <ProfileCard/>
      <MiniDashboard/>
    </div>

  )
}

export default App
