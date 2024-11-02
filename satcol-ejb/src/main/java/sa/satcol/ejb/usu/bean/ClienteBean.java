/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/J2EE/EJB30/StatelessEjbClass.java to edit this template
 */
package sa.satcol.ejb.usu.bean;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javafx.scene.effect.Light;
import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import sa.satcol.ejb.usu.data.CommonInput;
import sa.satcol.ejb.usu.data.CommonMessage;
import sa.satcol.ejb.usu.data.CommonResponse;
import sa.satcol.jpa.entites.Cliente;
import sa.satcol.jpa.usu.dao.ClienteDao;
import sa.satcol.jpa.usu.dao.DataTable;

/**
 *
 * @author victor.flores
 */
@Stateless
public class ClienteBean {

    @PersistenceContext(unitName = "sa-PU")
    EntityManager em;
    private CommonResponse cr;
    private ClienteDao clienteDao;

    Calendar calendar = Calendar.getInstance();

    @PostConstruct
    public void init() {

        clienteDao = new ClienteDao();
        clienteDao.setEntityManager(em);

    }

    public CommonResponse findAll(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);

        try {
            System.out.println("asdasd");
            String nombre = "";
            if (req.getCliente().getNombre() != null) {
                nombre = req.getCliente().getNombre();
            }
            List<Cliente> clientelist = null;
            System.out.println("asdasdasd");
            clientelist = clienteDao.listarusuario(nombre);
            cr.setClienteList(clientelist);
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
            System.out.println("clinete");
            if (req.getCliente()!= null) {
                Cliente cli = new Cliente();

                cli.setNombre(req.getCliente().getNombre());
                cli.setApellido(req.getCliente().getApellido());
                cli.setDireccion(req.getCliente().getDireccion());
                cli.setCi(req.getCliente().getCi());
                cli.setNit(req.getCliente().getNit());
                cli.setTelefono(req.getCliente().getTelefono());
                cli.setCelular(req.getCliente().getCelular());
                cli.setEstado(req.getCliente().getEstado());
                cli.setTipo(req.getCliente().getTipo());

                cli.setFechaRegistro(calendar.getTime());

                clienteDao.create(cli);
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
            if (req.getCliente() != null && req.getCliente().getId() > 0) {
                boolean isDeletePrm = clienteDao.eliminar(req.getCliente().getId());
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
            if (req.getCliente().getId() >= 0) {

                Cliente cli = clienteDao.findById(req.getCliente().getId());
                cr.setCliente(cli);
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
            Cliente cli = clienteDao.findById(req.getCliente().getId());

            if (cli != null) {
                System.out.println("VERIFICA FECHA SI ES MENOR");

                cli.setNombre(req.getCliente().getNombre());
                cli.setApellido(req.getCliente().getApellido());
                cli.setDireccion(req.getCliente().getDireccion());
                cli.setCi(req.getCliente().getCi());
                cli.setNit(req.getCliente().getNit());
                cli.setTelefono(req.getCliente().getTelefono());
                cli.setCelular(req.getCliente().getCelular());
                cli.setEstado(req.getCliente().getEstado());
                cli.setTipo(req.getCliente().getTipo());
                clienteDao.update(cli);
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
    public DataTable listaConsumidores(DataTable dataTable) {
        int rowsTotal = 0;
        DataTable dt = new DataTable();
        List<Object> resultList = new ArrayList<Object>();
        try {
            dt = dataTable;
            String texto = "";
            HashMap map = null;
            if (dt.getSearch() != null && !dt.getSearch().equals("")) {
                map = new HashMap((Map) dt.getSearch());
                texto = String.valueOf(map.get("texto"));
            }           
            resultList = clienteDao.listaClientes(texto, dt.getColumns(), dt.getOrder(), dt.getLength(), dt.getStart());
            if (resultList != null && resultList.size() > 0) {
                Iterator it = resultList.iterator();
                Object[] result = (Object[]) it.next();
                rowsTotal = ((BigInteger) result[result.length - 1]).intValue();
            }
            dt.setRecordsTotal(rowsTotal);
            dt.setRecordsFiltered(rowsTotal);
            dt.setData(resultList);
        } catch (Exception ex) {
            System.out.println("error=" + ex.getMessage());
            dt.setRecordsTotal(rowsTotal);
            dt.setRecordsFiltered(rowsTotal);
            dt.setData(resultList);
        }
        return dt;
    }
}
