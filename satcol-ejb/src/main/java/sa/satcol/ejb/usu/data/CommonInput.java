/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.ejb.usu.data;

import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import sa.satcol.jpa.entites.Cliente;
import sa.satcol.jpa.entites.Contratoservicio;
import sa.satcol.jpa.entites.Contratoserviciodetalle;
import sa.satcol.jpa.entites.Tiposervicio;
import sa.satcol.jpa.entites.Usuario;

/**
 *
 * @author victor.flores
 */
@XmlRootElement
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class CommonInput {

    private Usuario usuario;
    private List<Usuario> usuarioList;
    private Cliente cliente;
    private List<Cliente> Clientelist;
    private Tiposervicio tiposervicio;
    private List<Tiposervicio> tiposervicioList;
    private Contratoservicio contratoservicio;
    private Contratoserviciodetalle contratoserviciodetalle;
//    private List<Contratoservicio> contratoservicioList;
    private Integer idconsumidor;
    private int resultad;
    private String Ruta;
    private String URLdireccion;
    private String passwordnuevo;

    /**
     * @return the usuario
     */
    public Usuario getUsuario() {
        return usuario;
    }

    /**
     * @param usuario the usuario to set
     */
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    /**
     * @return the usuarioList
     */
    public List<Usuario> getUsuarioList() {
        return usuarioList;
    }

    /**
     * @param usuarioList the usuarioList to set
     */
    public void setUsuarioList(List<Usuario> usuarioList) {
        this.usuarioList = usuarioList;
    }

    /**
     * @return the idconsumidor
     */
    public Integer getIdconsumidor() {
        return idconsumidor;
    }

    /**
     * @param idconsumidor the idconsumidor to set
     */
    public void setIdconsumidor(Integer idconsumidor) {
        this.idconsumidor = idconsumidor;
    }

    /**
     * @return the resultad
     */
    public int getResultad() {
        return resultad;
    }

    /**
     * @param resultad the resultad to set
     */
    public void setResultad(int resultad) {
        this.resultad = resultad;
    }

    /**
     * @return the Ruta
     */
    public String getRuta() {
        return Ruta;
    }

    /**
     * @param Ruta the Ruta to set
     */
    public void setRuta(String Ruta) {
        this.Ruta = Ruta;
    }

    /**
     * @return the URLdireccion
     */
    public String getURLdireccion() {
        return URLdireccion;
    }

    /**
     * @param URLdireccion the URLdireccion to set
     */
    public void setURLdireccion(String URLdireccion) {
        this.URLdireccion = URLdireccion;
    }

    /**
     * @return the passwordnuevo
     */
    public String getPasswordnuevo() {
        return passwordnuevo;
    }

    /**
     * @param passwordnuevo the passwordnuevo to set
     */
    public void setPasswordnuevo(String passwordnuevo) {
        this.passwordnuevo = passwordnuevo;
    }

    /**
     * @return the cliente
     */
    public Cliente getCliente() {
        return cliente;
    }

    /**
     * @param cliente the cliente to set
     */
    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    /**
     * @return the Clientelist
     */
    public List<Cliente> getClientelist() {
        return Clientelist;
    }

    /**
     * @param Clientelist the Clientelist to set
     */
    public void setClientelist(List<Cliente> Clientelist) {
        this.Clientelist = Clientelist;
    }

    /**
     * @return the tiposervicio
     */
    public Tiposervicio getTiposervicio() {
        return tiposervicio;
    }

    /**
     * @param tiposervicio the tiposervicio to set
     */
    public void setTiposervicio(Tiposervicio tiposervicio) {
        this.tiposervicio = tiposervicio;
    }

    /**
     * @return the tiposervicioList
     */
    public List<Tiposervicio> getTiposervicioList() {
        return tiposervicioList;
    }

    /**
     * @param tiposervicioList the tiposervicioList to set
     */
    public void setTiposervicioList(List<Tiposervicio> tiposervicioList) {
        this.tiposervicioList = tiposervicioList;
    }

    /**
     * @return the contratoservicio
     */
    public Contratoservicio getContratoservicio() {
        return contratoservicio;
    }
//
//    /**
//     * @param contratoservicio the contratoservicio to set
//     */

    public void setContratoservicio(Contratoservicio contratoservicio) {
        this.contratoservicio = contratoservicio;
    }
//
//    /**
//     * @return the contratoservicioList
//     */
//    public List<Contratoservicio> getContratoservicioList() {
//        return contratoservicioList;
//    }
//
//    /**
//     * @param contratoservicioList the contratoservicioList to set
//     */
//    public void setContratoservicioList(List<Contratoservicio> contratoservicioList) {
//        this.contratoservicioList = contratoservicioList;
//    }

    /**
     * @return the contratoserviciodetalle
     */
    public Contratoserviciodetalle getContratoserviciodetalle() {
        return contratoserviciodetalle;
    }

    /**
     * @param contratoserviciodetalle the contratoserviciodetalle to set
     */
    public void setContratoserviciodetalle(Contratoserviciodetalle contratoserviciodetalle) {
        this.contratoserviciodetalle = contratoserviciodetalle;
    }

}
