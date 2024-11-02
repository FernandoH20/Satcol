package sa.satcol.ejb.usu.bean;

import java.util.Calendar;
import java.util.List;
import javax.annotation.PostConstruct;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import sa.satcol.ejb.usu.data.CommonInput;
import sa.satcol.ejb.usu.data.CommonMessage;
import sa.satcol.ejb.usu.data.CommonResponse;
import sa.satcol.jpa.usu.dao.UsuarioDao;
import javax.ejb.Stateless;
import sa.satcol.jpa.entites.Usuario;

/**
 *
 * @author victor.flores
 */
@Stateless
public class UsuarioBeans {

    @PersistenceContext(unitName = "sa-PU")
    EntityManager em;
    private CommonResponse cr;
    private UsuarioDao usuarioDao;

    Calendar calendar = Calendar.getInstance();

    @PostConstruct
    public void init() {

        usuarioDao = new UsuarioDao();
        usuarioDao.setEntityManager(em);

    }

    public CommonResponse verificaexiste(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);
        try {
            System.out.println("paso bean11");
            if (req.getUsuario().getNombre() != null) {
                if (!req.getUsuario().getNombre().equals("") && !req.getUsuario().getPassword().equals("")) {
                    System.out.println("ee=" + req.getUsuario().getNombre());
                    Integer nombre = usuarioDao.verificaexiste(req.getUsuario().getNombre());//verifica solo nombre

                    System.out.println("nombre" + nombre);
                    if (nombre == 1) {
                        //System.out.println("1");
                        //Integer usu = usuarioDao.usuarioId(req.getUsuario());//verifica nombre password
                        //System.out.println("2");
                        cr.setResultMessage(CommonMessage.USUARIO.INFO.EXISTE);
                        cr.setResult(0);
                    } else {
                        cr.setResult(2);
                        cr.setResultMessage(CommonMessage.USUARIO.WARNING.USUARIO); // Usuario no encontrado
                    }
                } else {
                    cr.setResult(2);
                    cr.setResultMessage(CommonMessage.USUARIO.WARNING.DATOSVACIOS);//Mensaje de pass incorecto
                }

            } else {
                cr.setResult(2);
                cr.setResultMessage(CommonMessage.USUARIO.ERROR.ERROR);

            }
        } catch (Exception e) {
            System.out.println("error" + e.getMessage());
        }
        return cr;
    }

    public CommonResponse findAll(CommonInput req) {
        cr = new CommonResponse();
        cr.setResult(1);

        try {
            String nombre = "";
            if (req.getUsuario().getNombre() != null) {
                nombre = req.getUsuario().getNombre();
            }
            List<Usuario> usuariolist = null;

            usuariolist = usuarioDao.listarusuario(nombre);
            cr.setUsuarioList(usuariolist);
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

            if (req.getUsuario() != null) {
                Usuario usu = new Usuario();

                usu.setNombre(req.getUsuario().getNombre());
                usu.setApellidopat(req.getUsuario().getApellidopat());
                usu.setApellidomat(req.getUsuario().getApellidomat());
                usu.setDireccion(req.getUsuario().getDireccion());
                usu.setUsername(req.getUsuario().getUsername());
                usu.setPassword(req.getUsuario().getPassword());
                usu.setCargo(req.getUsuario().getCargo());
                usu.setEstado(req.getUsuario().getEstado());
                usu.setCi(req.getUsuario().getCi());
                usu.setTelefono(req.getUsuario().getTelefono());
                usu.setFechaRegistro(calendar.getTime());

                usuarioDao.create(usu);
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
            System.out.println("paso eliminar");
            if (req.getUsuario() != null && req.getUsuario().getId() > 0) {
                boolean isDeletePrm = usuarioDao.eliminar(req.getUsuario().getId());
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
            if (req.getUsuario().getId() >= 0) {

                Usuario usu = usuarioDao.findById(req.getUsuario().getId());
                cr.setUsuario(usu);
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
            Usuario usu = usuarioDao.findById(req.getUsuario().getId());

            if (usu != null) {
                System.out.println("VERIFICA FECHA SI ES MENOR");

                usu.setNombre(req.getUsuario().getNombre());
                usu.setApellidopat(req.getUsuario().getApellidopat());
                usu.setApellidomat(req.getUsuario().getApellidomat());
                usu.setDireccion(req.getUsuario().getDireccion());
                usu.setUsername(req.getUsuario().getUsername());
                usu.setPassword(req.getUsuario().getPassword());
                usu.setCargo(req.getUsuario().getCargo());
                usu.setEstado(req.getUsuario().getEstado());
                usu.setCi(req.getUsuario().getCi());
                usu.setTelefono(req.getUsuario().getTelefono());
                usuarioDao.update(usu);
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
