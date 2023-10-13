import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./components/shared/Login"

function App() {
  return (
    <div className="bg-gradient-to-r from-[#12100E] to-[#2B4162] w-screen h-screen">   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
