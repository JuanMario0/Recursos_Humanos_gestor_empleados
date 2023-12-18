package Marey.rh.excepcion;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)

public class RecursoNoEncontradoExcepcion extends RuntimeException{
     public  RecursoNoEncontradoExcepcion(String mensaje){
         super(mensaje);
     }
}
