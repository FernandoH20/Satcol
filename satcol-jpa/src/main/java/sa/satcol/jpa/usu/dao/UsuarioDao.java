/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.usu.dao;

import java.util.List;
import sa.satcol.jpa.common.GenericDAO;
import sa.satcol.jpa.entites.Usuario;

/**
 *
 * @author victor.flores
 */
public class UsuarioDao extends GenericDAO<Usuario> {

    public boolean verificapass(Usuario usu) throws Exception {
        boolean valor = false;
        try {
            System.out.println("1234");
//            String sql = "SELECT * "
//                    + " FROM usuario "
//                    + " WHERE nombre='" + usu.getNombre() + "' and password='" + usu.getPassword() + "'";
//            System.out.println("sql=" + sql);
//            entityManager.createNativeQuery(sql).getSingleResult();
//            System.out.println("NATIVE=" + valor);

            valor = true;

        } catch (Exception e) {
            System.out.println("Error en createPeriodoPuntoControl DAO" + e.getMessage());
            valor = false;
        }
        return valor;

    }

    public Integer verificaexiste(String nombre) throws Exception {
        Integer ids = 0;
        try {
            System.out.println("paso" + nombre);
            String sql = "SELECT id "
                    + " FROM usuario "
                    + " WHERE nombre='" + nombre.trim() + "'";
            System.out.println("sql=" + sql);
            if (entityManager.createNativeQuery(sql).getResultList().size() > 0) {
                ids = 1;// (Integer) entityManager.createNativeQuery(sql).getSingleResult();
            } else {
                ids = 0;
            }

        } catch (Exception e) {
            System.out.println("Error en createPeriodoPuntoControl DAO" + e.getMessage());

        }
        return ids;

    }

    public Integer usuarioId(Usuario usu) throws Exception {
        Integer ids = 0;
        try {
            String sql = "SELECT id "
                    + " FROM usuario "
                    + " WHERE nombre='" + usu.getNombre() + "' and password='" + usu.getPassword() + "' and codigo<=3 ";
            System.out.println("sql=" + sql);
            ids = (Integer) entityManager.createNativeQuery(sql).getSingleResult();
        } catch (Exception e) {
            System.out.println("Error en createPeriodoPuntoControl DAO" + e.getMessage());

        }
        return ids;

    }

    public List<Usuario> listarusuario(String nombre) {
        String select = "";
        try {
            String where = "";
            select = "select id,nombre,apellidopat,apellidomat,direccion,ci,cargo,estado,fecha_registro "
                    + "from usuario ";
            if (nombre != null && !nombre.equals("")) {
                if (!"".equals(where)) {
                    where += " AND ";
                }
                where += " nombre like '%" + nombre + "%' ";
                select += " where " + where;
            }
            select+=" order by nombre ";
            System.out.println(" select all=" + select);
        } catch (Exception e) {
            System.out.println("error lote" + e.getMessage());
        }

        return entityManager.createNativeQuery(select).getResultList();
    }

    public boolean eliminar(int id) {
        boolean exito = false;
        try {
            Usuario registro = entityManager.find(Usuario.class, id);
            if (registro != null) {
                entityManager.remove(registro);
                exito = true;
            }
        } catch (Exception e) {
            System.out.println("NUC-AREA - Error en eliminar DAO" + e.getMessage());
            exito = false;
        }
        return exito;
    }
}
