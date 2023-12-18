import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarEmpleados() {

  const urlBase = "http://localhost:8080/rh-app/empleados";

  let navegacion = useNavigate();

  const {id}= useParams();


  const [empleado, SetEmpleado]=useState({
    nombre:"", 
    departamento:"",
    sueldo:""
  })

  const{nombre, departamento, sueldo} = empleado

  useEffect(()=>{
    cargarEmpleado();
  },[])


  const cargarEmpleado = async () => {
    const resutlado = await axios.get(`${urlBase}/${id}`)
    SetEmpleado(resutlado.data);
  }

  const onInputChange = (e)=> {
    //spread operator ... (expandir los atributos)
    SetEmpleado({...empleado, [e.target.name]: e.target.value})
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${id}`, empleado);
    // redirijimos a la pagina de inicio 
    navegacion('/');



  }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Editar Empleado</h3>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control"
             id="nombre" name='nombre' required={true} 
             value={nombre} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="departamento" 
            className="form-label">Departamento</label>
            <input type="text" className="form-control"
             id="departamento" name = 'departamento' 
             value={departamento} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="sueldo" 
            className="form-label">Sueldo</label>
            <input type="number" step="any" className="form-control"
             id="sueldo" name = 'sueldo'
             value = {sueldo} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className='text-center'>
        <button type="submit" 
        className="btn btn-warning btn-sm me-3">Guardar</button>
        <a href='/' className='btn btn-danger btn-sm'>Regresar</a>
        </div>
    </form>
    </div>
  )
}
