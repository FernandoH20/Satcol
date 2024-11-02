/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package sa.satcol.ejb.usu.bean;

import java.util.Calendar;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import sa.satcol.ejb.usu.data.CommonInput;
import sa.satcol.ejb.usu.data.CommonMessage;
import sa.satcol.ejb.usu.data.CommonResponse;
import sa.satcol.jpa.entites.Tiposervicio;
import sa.satcol.jpa.usu.dao.TiposervicioDao;

/**
 *
 * @author crifor
 */
@Stateless
public class TiposervicioBean {

     @PersistenceContext(unitName = "sa-PU")
    EntityManager em;
    private CommonResponse cr;
    private TiposervicioDao tiposervicioDao;

    Calendar calendar = Calendar.getInstance();

    @PostConstruct
    public void init() {

        tiposervicioDao = new TiposervicioDao();
        tiposervicioDao.setEntityManager(em);

    }

    public CommonResponse findAll(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);

        try {
            System.out.println("asdasd");
            String nombre = "";
            if (req.getTiposervicio().getNombretipo() != null) {
                nombre = req.getTiposervicio().getNombretipo();
            }
            List<Tiposervicio> tiposerviciolist = null;
            System.out.println("asdasdasd");
            tiposerviciolist = tiposervicioDao.listartiposervicio(nombre);
            cr.setTiposervicioList(tiposerviciolist);
            cr.setResult(0);
            //  cr.setResultMessage(CommonMessage.GLOBAL.SUCCESS.LIST);
            System.out.println("SALIO");

        } catch (Exception e) {

            System.out.println("error" + e.getMessage());
        }
        return cr;
    }

    public CommonResponse create(CommonInput req) {
        cr = new CommonResponse();

        cr.setResult(1);

        try {
            calendar = Calendar.getInstance();
            System.out.println("servio");
            if (req.getTiposervicio()!= null) {
                Tiposervicio ser = new Tiposervicio();
                ser.setNombretipo(req.getTiposervicio().getNombretipo());
                ser.setPrecio(req.getTiposervicio().getPrecio());
                ser.setFechaRegistro(calendar.getTime());
                tiposervicioDao.create(ser);
                cr.setResult(0);
                cr.setResultMessage(CommonMessage.USUARIO.INFO.INFO);

            }
        } catch (Exception e) {
            System.out.println("mundo''3");
            cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);
        }
        return cr;
    }

    public CommonResponse delete(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);

        try {
            if (req.getTiposervicio() != null && req.getTiposervicio().getId() > 0) {
                boolean isDeletePrm = tiposervicioDao.eliminar(req.getTiposervicio().getId());
                if (isDeletePrm) {
                    cr.setResult(0);
                    cr.setResultMessage(CommonMessage.USUARIO.SUCCESS.ELIMINO);
                } else {
                    cr.setResultMessage("Error. El area no existe o esta siendo utilizada");
                }
            } else {
                cr.setResultMessage("no existe dato");
            }
        } catch (Exception e) {
            cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);
            // LOG.debug(input, cr);
        }
        return cr;
    }

    public CommonResponse findByIdedit(CommonInput req) {

        cr = new CommonResponse();
        cr.setResult(1);
        try {
            if (req.getTiposervicio().getId() >= 0) {

                Tiposervicio cli = tiposervicioDao.findById(req.getTiposervicio().getId());
                cr.setTiposervicio(cli);
                cr.setResult(0);
            } else {
                cr.setResult(2);
                cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);
            }
        } catch (Exception e) {
            cr.setResultMessage(e.getMessage());
        }
        return cr;
    }

    public CommonResponse update(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);
        try {
            calendar = Calendar.getInstance();
            Tiposervicio ser = tiposervicioDao.findById(req.getTiposervicio().getId());

            if (ser != null) {
                System.out.println("VERIFICA FECHA SI ES MENOR");
                ser.setNombretipo(req.getTiposervicio().getNombretipo());
                ser.setPrecio(req.getTiposervicio().getPrecio());
                tiposervicioDao.update(ser);
                cr.setResult(0);
                cr.setResultMessage(CommonMessage.USUARIO.INFO.MODIFI);
            } else {

                cr.setResult(2);
                cr.setResultMessage(CommonMessage.USUARIO.WARNING.REGISTRO_NO_ENCONTRADO);
            }
        } catch (Exception e) {
            cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);
        }
        return cr;
    }
}
