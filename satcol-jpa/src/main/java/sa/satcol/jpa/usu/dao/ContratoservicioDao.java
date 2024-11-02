/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.usu.dao;

import java.util.List;
import sa.satcol.jpa.common.GenericDAO;
import sa.satcol.jpa.entites.Contratoservicio;

/**
 *
 * @author crifor
 */
public class ContratoservicioDao extends GenericDAO<Contratoservicio>{
    public List<Contratoservicio> listarcontratos() {
        String select = "";
        try {
            String where = "";
            select = "select id,nombre,apellido,telefono,celular,ci,nit,direccion,estado,tipo "
                    + "from cliente ";

            System.out.println(" select all=" + select);
        } catch (Exception e) {
            System.out.println("error cliente" + e.getMessage());
        }

        return entityManager.createNativeQuery(select).getResultList();
    }
}
