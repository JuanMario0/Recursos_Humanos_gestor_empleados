package Marey.rh.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity  // Esta clase representa una entidad en una base de datos
@Data  // Genera automáticamente getters, setters, equals, hashCode y toString para los campos de la clase
@NoArgsConstructor  // Genera automáticamente un constructor sin argumentos
@AllArgsConstructor  // Genera automáticamente un constructor que toma todos los argumentos
@ToString  // Genera automáticamente un método toString para la clase

public class Empleado {
    @Id  // Indica que el campo idEmpleado es la clave primaria de la entidad
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Configura la generación automática de valores para idEmpleado
    Integer idEmpleado;  // Identificador único del empleado
    String nombre;  // Nombre del empleado
    String departamento;  // Departamento al que pertenece el empleado
    double sueldo;  // Sueldo del empleado
}

