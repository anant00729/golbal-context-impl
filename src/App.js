import { useContext } from 'react'
import './App.css';
import Home from './Home'
import Info from './Info'
import Search from './Search'
import { GlobalProvider, 
  GlobalContext } from './global/GlobalContext'


const App = () =>  {
  const {isLoggedIn }  = useContext(GlobalContext)
  return (
  <GlobalProvider>
      <div
      style={{
        border: isLoggedIn == 'true' ?  '10px solid green' : '10px solid teal', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'}}
    >
      <Info/>
    </div>
    <Home/>
    <Search/>
  </GlobalProvider>
  )
}

export default App;
