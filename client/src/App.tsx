import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./components/shared/Login"
import Dashboard from "./components/Dashboard"
import Signup from "./components/shared/Signup"

function App() {
  return (
    <div className="bg-gradient-to-r from-[#12100E] to-[#2B4162] w-screen h-screen">   
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
