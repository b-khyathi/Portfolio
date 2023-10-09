import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES_CONFIG } from 'Constants'
import SideNav from 'components/sidenav';
import './App.css'

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
      <SideNav />
      <Routes>
        {
          ROUTES_CONFIG.map(route => (<Route path={route.path} element={<route.Component />}>
          </Route>))
        }
        
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App