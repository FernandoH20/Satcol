/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.ejb.usu.data;

/**
 *
 * @author victor.flores
 */
public class CommonMessage {

    public static class USUARIO {

        public static class ERROR {

            public static String ERROR = "No existe datos";
            public static String ERRORbn = "Ya existe resgistrado";
            public static String ERRORBLOQ = "Bloqueado por intento fallidos ";
            public static String ARCHIVOINCORRECTO = "El archivo no es correcto";
            public static String NOHABIL = "No se puede habilitar con ese archivo utilizado";
        }

        public static class SUCCESS {

            public static String SUCCESS = "Entidad AGENCIA, registrado satisfactoriamente";
            public static String REGISTRO_ENCONTRADO = "Registro(s) de AGENCIA encontrado(s)";
            public static String IMPORTEUSUARIO = "Se importo correctamente";
            public static String ASIGNADO = "Ya existe consumidor asignado";
            public static String ACTIVOCORRECTO = "Se habilito el usuario";
            public static String ELIMINO = "Se elimino correctamente";
        }

        public static class WARNING {

            public static String WAMING = "Usuario o password incorrecto";
            public static String REGISTRO_NO_ENCONTRADO = "Registro(s) de AGENCIA no encontrado(s)";
            public static String ENTIDAD_REQUERIDA = "Entidad AGENCIA, es requerida";
            public static String INGRESOSISTEMA = "Dia no habilitado";
            public static String USUARIO = "Usuario no existe registrado";
            public static String ACTIVO = "El archivo no es correcto";
            public static String DATOSVACIOS = "Datos vacios";
            public static String CAMBIOPASS = "Debe ingresar su password con el mismo usuario para el cambio.";
        }

        public static class INFO {

            public static String INFO = "Registro realizado con exito";
            public static String MODIFI = "Se modifico correctamente";
            public static String MODIFIPASS = "Se cambio correctamente";
            public static String CREAR = "Se creo correctamente";
            public static String EXISTE = "Existe Usuario";
        }
    }
}
