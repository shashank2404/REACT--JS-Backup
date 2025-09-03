
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';


function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App