import UserContextProvider from './context/UserContext';
import UserTable from './component/UserTable';
import UserForm from './component/UserForm';

function App() {
  return (
    <UserContextProvider>

      <UserForm />
      <UserTable />

    </UserContextProvider>
  )
};

export default App;