import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Contexts/Auth"
import { ProtectedLayout } from "./Contexts/ProtectedLayout"
import Rotas from "./Routes/Rotas.jsx"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </BrowserRouter>    
  )
}

export default App
