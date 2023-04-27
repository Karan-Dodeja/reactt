import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.comopnent';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/sing-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  )
}

export default App