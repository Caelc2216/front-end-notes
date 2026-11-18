import { useState } from 'react'
import './App.css'
import { login } from './services/auth'
import type { User } from './types/auth'


function App()
 {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  function handleLogin(){
    const user = login(username, password);

    if(user){
      setCurrentUser(user);
      setError('');
    }
    else{
      setError('Invalid username or password');
    }
  }

  if(currentUser){
    return(
      <div>
        <h1>Welcome {currentUser.username}!</h1>
        <p>Your Roles: {currentUser.roles.join(', ')}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <input placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)}/>
      <input placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      <p>{error}</p>
    </div>
  )  
}

export default App
