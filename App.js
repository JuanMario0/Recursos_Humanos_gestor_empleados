import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
import AgregarEempleado from "./empleados/AgregarEempleado";
import EditarEmpleados from "./empleados/EditarEmpleados";

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route exact path='/' element={<ListadoEmpleados/>}/>
      <Route exact path='/agregar' element={<AgregarEempleado/>}/>
      <Route exact path='/editar/:id' element = {<EditarEmpleados/>}/>
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
