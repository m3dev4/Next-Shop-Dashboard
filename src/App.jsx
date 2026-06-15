import React from 'react'
import Sidebar from './components/sidebar'

const App = () => {
  return (
    <div className='flex w-screen min-h-screen items-center justify-center'>
       <Sidebar />
       <h1>Dashboard</h1>
    </div>
  )
}

export default App