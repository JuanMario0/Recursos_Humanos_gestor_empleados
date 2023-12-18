package Marey.rh.servicio;  // Declaración del paquete donde se encuentra la interfaz

import Marey.rh.modelo.Empleado;  // Importación de la clase Empleado que se utilizará en la interfaz
import java.util.List;  // Importación de la interfaz List del paquete java.util

public interface IEmpleadoServicio {
    // Esta interfaz define un contrato para las operaciones relacionadas con los empleados.

    public List<Empleado> listarEmpleados();
    // Método que lista todos los empleados disponibles en alguna fuente de datos (por ejemplo, una base de datos).
    // Retorna una lista de objetos de tipo Empleado que representan a los empleados.

    public Empleado buscarEmpleadoPorId(Integer idEmpleado);
    // Método que busca un empleado por su identificador único (idEmpleado).
    // Recibe como parámetro el idEmpleado a buscar y retorna un objeto Empleado si se encuentra, o null si no se encuentra.

    public Empleado guardarEmpleado(Empleado empleado);
    // Método para guardar un nuevo empleado o actualizar uno existente.
    // Recibe un objeto de tipo Empleado como parámetro y retorna el empleado guardado o actualizado.

    public void EliminarEmpleado(Empleado empleado);
    // Método para eliminar un empleado de la fuente de datos.
    // Recibe como parámetro un objeto de tipo Empleado que se eliminará de la fuente de datos. No retorna un valor.

}
