import React from 'react'
import './sass/main.scss'
import Topbar from './components/organisms/Topbar'
import Sidebar from './components/organisms/Sidebar'
import Content from './components/molecules/Content'
import Menu from './components/organisms/Menu'

const App = () => {
  return (
    <div className='app'>
      <Topbar />
      <Sidebar />
      <Menu />
      <Content />
    </div>
  )
}

export default App
