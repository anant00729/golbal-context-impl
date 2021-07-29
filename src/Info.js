import React, {useContext} from 'react'
import { GlobalContext } from './global/GlobalContext'

export default function Info() {
  const {isLoggedIn} = useContext(GlobalContext)
  return (
    <div style={{
      border: isLoggedIn === 'true' ?  '10px solid tomato' : '10px solid teal', 
      cursor: 'pointer'
    }}
    >
      <label style={{fontSize: '32px'}}>Set value</label>
      <p
      style={{
        fontSize: '32px'
      }}
      >{isLoggedIn}</p>
    </div>
  )
}
