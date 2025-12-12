import React from 'react'
import Chanukkiah from './Chanukkiah'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#333'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '50px',
        right: '50px'
      }}>
        <Chanukkiah />
      </div>
      <h1 style={{ color: '#fff' }}>My Website Content</h1>
    </div>
  )
}

export default App
