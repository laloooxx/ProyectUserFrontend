import UserContextProvider from './context/UserContext';
import UserTable from './component/UserTable';
import UserForm from './component/FormCreatedUser';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio'


/**
 * El componente principal donde va a renderizar todo
 * @returns retornamos la app principal q es inicion
 */
function App() {

  return (
    <UserContextProvider> 
      <Routes>
        <Route path='*' element={<Inicio />}/>
      </Routes>
    </UserContextProvider>
  )
};

export default App;