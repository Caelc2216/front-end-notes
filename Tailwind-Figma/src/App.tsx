import { useState } from 'react'
import './App.css'
import MiniDashboard from './components/MiniDashboard'
import ProfileCard from './components/ProfileCard'
import { Workspace } from './components/Workspace'

function App() {
  const [activeTab, setActiveTab] = useState('Profile Card')


  return (
    <div>
      <div className='flex gap-4 mb-4 flex items-center justify-center'>
        <span style={{ cursor: 'pointer', padding: '0.5rem', color: activeTab === 'Profile Card' ? 'blue' : undefined, backgroundColor: activeTab === 'Profile Card' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Profile Card')}>Profile Card</span>
        <span style={{ cursor: 'pointer', padding: '0.5rem', color: activeTab === 'Mini Dashboard' ? 'blue' : undefined, backgroundColor: activeTab === 'Mini Dashboard' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Mini Dashboard')}>Mini Dashboard</span>
        <span style={{ cursor: 'pointer', padding: '0.5rem', color: activeTab === 'Workspace' ? 'blue' : undefined, backgroundColor: activeTab === 'Workspace' ? 'lightgray' : undefined }} onClick={() => setActiveTab('Workspace')}>Workspace</span>
      </div>
      <div>
        {activeTab === 'Profile Card' && <ProfileCard />}
        {activeTab === 'Mini Dashboard' && <MiniDashboard />}
        {activeTab === 'Workspace' && <Workspace />}
      </div>
    </div>
  )
}

export default App
