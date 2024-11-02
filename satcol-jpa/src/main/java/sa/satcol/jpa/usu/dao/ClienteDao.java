/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.usu.dao;

import java.util.ArrayList;
import java.util.List;
import sa.satcol.jpa.common.GenericDAO;
import sa.satcol.jpa.entites.Cliente;
import javax.persistence.Query;

/**
 *
 * @author victor.flores
 */
public class ClienteDao extends GenericDAO<Cliente>{
   
    public Integer verificaexiste(String nombre) throws Exception {
        Integer ids = 0;
        try {
            System.out.println("paso" + nombre);
            String sql = "SELECT id "
                    + " FROM cliente "
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

    

    public List<Cliente> listarusuario(String nombre) {
        String select = "";
        try {
            String where = "";
            select = "select id,nombre,apellido,telefono,celular,ci,nit,direccion,estado,tipo "
                    + "from cliente ";
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
            System.out.println("error cliente" + e.getMessage());
        }

        return entityManager.createNativeQuery(select).getResultList();
    }

    public boolean eliminar(int id) {
        boolean exito = false;
        try {
            Cliente registro = entityManager.find(Cliente.class, id);
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
    public List<Object> listaClientes(String texto, List<Column> columns, List<Order> sort, int pageSize, int pageIndex) {
        List<Object> consumidoresList = new ArrayList<Object>();
        try {
            String sql_query = "select id,nombre,apellido,ci,celular\n"
                    + "from cliente\n";
                   
            if (!texto.equals("")) {
                sql_query += "WHERE to_tsvector('simple', concat_ws(' ',nombre,apellido,ci)) @@ plainto_tsquery('simple', '" + texto + "')\n";
            }
            sql_query += "LIMIT 10000";
            String sql = "SELECT _table.*, count( *) OVER() AS total";
            sql += " FROM (" + sql_query + ") as _table";

            if (sort.size() > 0) {
                sql += " ORDER BY ";
                for (Order order : sort) {
                    sql += " " + order.getColumn() + " " + order.getDir() + " ,";
                }
                sql = sql.substring(0, sql.lastIndexOf(","));
            }
            sql += "  LIMIT " + pageSize + " OFFSET " + pageIndex;
            Query query = entityManager.createNativeQuery(sql);
            consumidoresList = query.getResultList();
        } catch (Exception ex) {
            System.out.println("error1="+ex.getMessage());
            throw ex;
        }
        return consumidoresList;
    }
}
