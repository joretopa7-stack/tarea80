import{Routes,
      Route,
      NavLink
    } from 'react-router-dom'
import TareasPage from './pages/TareasPage'
import UsersPage from './pages/UsersPage'

const App = () => {
  return (
    <>
        <nav>
            <NavLink to="/tareas">
              Tareas
            </NavLink>
            
            <NavLink to="/users">
              Usuarios
            </NavLink>

            <main>
                <Routes>
                    <Route
                        path='/tareas'
                        element={<TareasPage/>}
                    />
                    <Route
                        path='/users'
                        element={<UsersPage/>}
                        />

                    <Route/>
                <Route/>  
                </Routes>
            </main>

        </nav>
    </>
  )
}

export default App