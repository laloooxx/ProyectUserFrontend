import UserContextProvider from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import InicioApp from '../pages/Inicio';


/**
 * El componente principal donde va a renderizar todo
 * @returns retornamos la app principal q es el inicio, con la ruta "*" para q maneje varios archivos
 */
function App() {

  return (
    <UserContextProvider> 
      <Routes>
        <Route path='*' element={<InicioApp />}/>
      </Routes>
    </UserContextProvider>
  )
};

export default App;