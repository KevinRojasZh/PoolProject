import './App.css';
import Loggin from './componets/Loggin';
import Perfil from './componets/Perfil';
import Registrate from './componets/Registrate'
import PrivateRoute from './componets/PrivateRoute'
import { BrowserRouter,Routes,Route } from "react-router";


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loggin/>} />

          <Route element={<PrivateRoute/>}>
            <Route path='/perfil' element={<Perfil/>} />
          </Route>
          
          <Route path='/registrate' element={<Registrate/>}/>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
