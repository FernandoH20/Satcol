/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.ejb.usu.data;

import sa.satcol.jpa.entites.Usuario;
import java.util.List;
import javax.xml.bind.annotation.XmlRootElement;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import sa.satcol.jpa.entites.Cliente;
//import sa.satcol.jpa.entites.Contratoservicio;
import sa.satcol.jpa.entites.Tiposervicio;

/**
 *
 * @author victor.flores
 */
@XmlRootElement
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
public class CommonResponse {

    private int result;
    private String resultMessage;
    private Usuario usuario;
    private List<Usuario> usuarioList;
    private Cliente cliente;
    private List<Cliente> ClienteList;
    private Tiposervicio tiposervicio;
    private List<Tiposervicio> tiposervicioList;
//    private Contratoservicio contratoservicio;
//    private List<Contratoservicio> contratoservicioList;
    private Integer idconsumidor;
    private String consumidornom;
    private String consumidornomlogin;
    private Integer estado;
    private int resultad;
    private String passwordnuevo;

    /**
     * @return the result
     */
    public int getResult() {
        return result;
    }

    /**
     * @param result the result to set
     */
    public void setResult(int result) {
        this.result = result;
    }

    /**
     * @return the resultMessage
     */
    public String getResultMessage() {
        return resultMessage;
    }

    /**
     * @param resultMessage the resultMessage to set
     */
    public void setResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
    }

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
     * @return the consumidornom
     */
    public String getConsumidornom() {
        return consumidornom;
    }

    /**
     * @param consumidornom the consumidornom to set
     */
    public void setConsumidornom(String consumidornom) {
        this.consumidornom = consumidornom;
    }

    /**
     * @return the consumidornomlogin
     */
    public String getConsumidornomlogin() {
        return consumidornomlogin;
    }

    /**
     * @param consumidornomlogin the consumidornomlogin to set
     */
    public void setConsumidornomlogin(String consumidornomlogin) {
        this.consumidornomlogin = consumidornomlogin;
    }

    /**
     * @return the estado
     */
    public Integer getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(Integer estado) {
        this.estado = estado;
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
     * @return the ClienteList
     */
    public List<Cliente> getClienteList() {
        return ClienteList;
    }

    /**
     * @param ClienteList the ClienteList to set
     */
    public void setClienteList(List<Cliente> ClienteList) {
        this.ClienteList = ClienteList;
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
//    public Contratoservicio getContratoservicio() {
//        return contratoservicio;
//    }
//
//    /**
//     * @param contratoservicio the contratoservicio to set
//     */
//    public void setContratoservicio(Contratoservicio contratoservicio) {
//        this.contratoservicio = contratoservicio;
//    }
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

}
