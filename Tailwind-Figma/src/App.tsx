import { useState } from 'react'
import './App.css'
import MiniDashboard from './components/MiniDashboard'
import ProfileCard from './components/ProfileCard'

function App() {
  const [activeTab, setActiveTab] = useState('Profile Card')


  return (
    <>
    <div className='flex gap-4 mb-4'>
      <span style={{ color: activeTab === 'Profile Card' ? 'blue' : undefined, backgroundColor: activeTab === 'Profile Card' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Profile Card')}>Profile Card</span>
      <span style={{ color: activeTab === 'Mini Dashboard' ? 'blue' : undefined, backgroundColor: activeTab === 'Mini Dashboard' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Mini Dashboard')}>Mini Dashboard</span>
      <span style={{ color: activeTab === 'Workspace' ? 'blue' : undefined, backgroundColor: activeTab === 'Workspace' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Workspace')}>Workspace</span>
    </div>
    <div className='p-2 justify-items-center'>
      {activeTab === 'Profile Card' && <ProfileCard/>}
      {activeTab === 'Mini Dashboard' && <MiniDashboard/>}
    </div>
    </>
  )
}

export default App
