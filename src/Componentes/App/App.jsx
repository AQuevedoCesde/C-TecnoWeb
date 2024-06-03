import { useRoutes, BrowserRouter } from "react-router-dom";
import { ProveedorInformacion } from "../Context/Contex";
import Login from "../Auth/Login/Login";
import "./App.css";
import Home from "../Pages/Home/Home";

const Redirecciones = () => {
  let rutas = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);
  return rutas;
};



function App() {
  return (
    <ProveedorInformacion>
      <BrowserRouter>
        <Redirecciones />
      </BrowserRouter>
    </ProveedorInformacion>
  );
}

export default App;
