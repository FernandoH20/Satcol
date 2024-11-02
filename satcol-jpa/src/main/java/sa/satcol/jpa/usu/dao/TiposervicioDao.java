/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.usu.dao;

import java.util.List;
import sa.satcol.jpa.common.GenericDAO;
import sa.satcol.jpa.entites.Tiposervicio;

/**
 *
 * @author crifor
 */
public class TiposervicioDao extends GenericDAO<Tiposervicio>{
    public Integer verificaexiste(String nombre) throws Exception {
        Integer ids = 0;
        try {
            System.out.println("paso" + nombre);
            String sql = "SELECT id "
                    + " FROM tiposervicio "
                    + " WHERE nombretipo='" + nombre.trim() + "'";
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

    

    public List<Tiposervicio> listartiposervicio(String nombre) {
        String select = "";
        try {
            String where = "";
            select = "select id,nombretipo,precio,fecha_registro "
                    + "from tiposervicio ";
            if (nombre != null && !nombre.equals("")) {
                if (!"".equals(where)) {
                    where += " AND ";
                }
                where += " nombretipo like '%" + nombre + "%' ";
                select += " where " + where;
            }
            select+=" order by nombretipo ";
            System.out.println(" select all=" + select);
        } catch (Exception e) {
            System.out.println("error tipo" + e.getMessage());
        }

        return entityManager.createNativeQuery(select).getResultList();
    }

    public boolean eliminar(int id) {
        boolean exito = false;
        try {
            Tiposervicio registro = entityManager.find(Tiposervicio.class, id);
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
