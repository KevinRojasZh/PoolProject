import './App.css';
import Loggin from './componets/Loggin';
import Perfil from './componets/Perfil';
import Registrate from './componets/Registrate'
import PrivateRoute from './componets/PrivateRoute'
import Historico from './componets/Historico'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loggin/>} />

        <Route element={<PrivateRoute/>}>
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/historico' element={<Historico/>} />
        </Route>

        <Route path='/registrate' element={<Registrate/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
