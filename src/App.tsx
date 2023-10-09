import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES_CONFIG } from 'Constants'
import SideNav from 'components/sidenav'

function App() {
  return (
    <BrowserRouter>
    <SideNav />
    <Routes>
      {
        ROUTES_CONFIG.map(route => (<Route path={route.path} element={<route.Component />}>
        </Route>))
      }
      
    </Routes>
  </BrowserRouter>
  )
}

export default App