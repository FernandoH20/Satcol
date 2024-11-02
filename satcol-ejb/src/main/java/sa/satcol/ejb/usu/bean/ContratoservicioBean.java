/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package sa.satcol.ejb.usu.bean;

import java.math.BigInteger;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import sa.satcol.ejb.usu.data.CommonInput;
import sa.satcol.ejb.usu.data.CommonMessage;
import sa.satcol.ejb.usu.data.CommonResponse;
import sa.satcol.jpa.entites.Contratoservicio;
import sa.satcol.jpa.entites.Contratoserviciodetalle;
import sa.satcol.jpa.entites.Tiposervicio;
import sa.satcol.jpa.usu.dao.ContratoservicioDao;
import sa.satcol.jpa.usu.dao.ContratoserviciodetalleDao;
import sa.satcol.jpa.usu.dao.TiposervicioDao;
//import sa.satcol.jpa.entites.Contratoservicio;
//import sa.satcol.jpa.usu.dao.ContratoservicioDao;

/**
 *
 * @author crifor
 */
@Stateless
public class ContratoservicioBean {
    
    @PersistenceContext(unitName = "sa-PU")
    EntityManager em;
    private CommonResponse cr;
    private ContratoservicioDao contratoservicioDao;
    private ContratoserviciodetalleDao contratoserviciodetalleDao;
    private TiposervicioDao tiposervicioDao;
    
    Calendar calendar = Calendar.getInstance();
    
    @PostConstruct
    public void init() {
        
        contratoservicioDao = new ContratoservicioDao();
        contratoservicioDao.setEntityManager(em);
        contratoserviciodetalleDao = new ContratoserviciodetalleDao();
        contratoserviciodetalleDao.setEntityManager(em);
        tiposervicioDao = new TiposervicioDao();
        tiposervicioDao.setEntityManager(em);
    }
    
    public CommonResponse create(CommonInput req) {
        cr = new CommonResponse();
        
        cr.setResult(1);
        
        try {
            calendar = Calendar.getInstance();
            System.out.println("crear contrato");
            Contratoservicio con = new Contratoservicio();
            con.setIdCliente(req.getContratoservicio().getIdCliente());
            con.setNrocontrato(1);
            con.setEstado(Integer.SIZE);
            con.setFechaRegistro(calendar.getTime());
            contratoservicioDao.create(con);
            System.out.println("detalle");
            for (Iterator iterator = req.getTiposervicioList().iterator(); iterator.hasNext();) {
                Tiposervicio idtipo = (Tiposervicio) iterator.next();
                Tiposervicio idt = tiposervicioDao.findById(idtipo.getId());
                Contratoserviciodetalle condet = new Contratoserviciodetalle();
                condet.setIdContrato(con);
                condet.setIdTiposerv(idtipo);
                condet.setMontoserv(idt.getPrecio());
                condet.setObservacion(req.getContratoserviciodetalle().getObservacion());
                condet.setFechaRegistro(calendar.getTime());
                contratoserviciodetalleDao.create(condet);
            }
            cr.setResult(0);
            cr.setResultMessage(CommonMessage.USUARIO.INFO.INFO);

        } catch (Exception e) {
            System.out.println("mundo''3");
            cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);
        }
        return cr;
    }
}
