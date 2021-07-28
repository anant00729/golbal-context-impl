import React, {useContext} from 'react'
import { GlobalContext } from './global/GlobalContext'

function Home() {

  const { onLoginValueChanged } = useContext(GlobalContext)

  const handleHomeClick = () => {
    if(localStorage.getItem('isLoggedIn') == 'false'){
      onLoginValueChanged('true')
    }else {
      onLoginValueChanged('false')
    }
  }
  return (
    <div style={{
      border: '10px solid brown',
      cursor: 'pointer'
    }}
    onClick={handleHomeClick}
    >
      <label style={{fontSize: '32px'}}>Set value from Home.js</label>
    </div>
  )
}

export default Home
