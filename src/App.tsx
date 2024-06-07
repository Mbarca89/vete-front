import "./App.css"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { useState, useEffect, lazy, Suspense } from "react"
import Landing from "./views/landing/Landing"
import Home from "./views/Home/Home"
import NavBar from "./components/Nav/NavBar"
import Products from "./views/Products/Products"
import Services from "./views/Services/Services"
import About from "./views/About/About"
import Chip from "./views/Chip/Chip"
import { useRecoilState } from "recoil"
import { logState, userState } from "./app/store"
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  let [isLogged, setLogged] = useRecoilState(logState)
  const [user, setUser] = useRecoilState(userState)

  const [initialCheckDone, setInitialCheckDone] = useState(false)

  useEffect(() => {
    if (!initialCheckDone) {
      if (localStorage.getItem("userName")) {
        setLogged(true)
        setUser({
          name: localStorage.getItem("name") || "",
          surname: localStorage.getItem("surname") || "",
          id: localStorage.getItem("id") || "",
          userName: localStorage.getItem("userName") || "",
          role: localStorage.getItem("role") || ""
        })
      }
      setInitialCheckDone(true)
    }
  }, [initialCheckDone, setLogged])
  if (!initialCheckDone) {
    return <div>Loading...</div>
  }

  return (
    <div className="App align-items-center d-flex flex-column flex-grow-1">
      <Toaster />
      <Routes>
        <Route element={(
          <>
            <NavBar />
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        )}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/chipeado" element={<Chip />} />
          <Route path="/nosotros" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
