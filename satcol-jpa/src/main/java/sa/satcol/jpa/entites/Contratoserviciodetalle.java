/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.entites;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author victor.flores
 */
@Entity
@Table(name = "contratoserviciodetalle")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Contratoserviciodetalle.findAll", query = "SELECT c FROM Contratoserviciodetalle c"),
    @NamedQuery(name = "Contratoserviciodetalle.findById", query = "SELECT c FROM Contratoserviciodetalle c WHERE c.id = :id"),
    @NamedQuery(name = "Contratoserviciodetalle.findByMontoserv", query = "SELECT c FROM Contratoserviciodetalle c WHERE c.montoserv = :montoserv"),
    @NamedQuery(name = "Contratoserviciodetalle.findByObservacion", query = "SELECT c FROM Contratoserviciodetalle c WHERE c.observacion = :observacion"),
    @NamedQuery(name = "Contratoserviciodetalle.findByFechaRegistro", query = "SELECT c FROM Contratoserviciodetalle c WHERE c.fechaRegistro = :fechaRegistro"),
    @NamedQuery(name = "Contratoserviciodetalle.findByUsuarioRegistro", query = "SELECT c FROM Contratoserviciodetalle c WHERE c.usuarioRegistro = :usuarioRegistro")})
public class Contratoserviciodetalle implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "montoserv")
    private BigDecimal montoserv;
    @Size(max = 20)
    @Column(name = "observacion")
    private String observacion;
    @Column(name = "fecha_registro")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaRegistro;
    @Column(name = "usuario_registro")
    private Integer usuarioRegistro;
    @JoinColumn(name = "id_contrato", referencedColumnName = "id")
    @ManyToOne
    private Contratoservicio idContrato;
    @JoinColumn(name = "id_tiposerv", referencedColumnName = "id")
    @ManyToOne
    private Tiposervicio idTiposerv;

    public Contratoserviciodetalle() {
    }

    public Contratoserviciodetalle(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getMontoserv() {
        return montoserv;
    }

    public void setMontoserv(BigDecimal montoserv) {
        this.montoserv = montoserv;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Integer getUsuarioRegistro() {
        return usuarioRegistro;
    }

    public void setUsuarioRegistro(Integer usuarioRegistro) {
        this.usuarioRegistro = usuarioRegistro;
    }

    public Contratoservicio getIdContrato() {
        return idContrato;
    }

    public void setIdContrato(Contratoservicio idContrato) {
        this.idContrato = idContrato;
    }

    public Tiposervicio getIdTiposerv() {
        return idTiposerv;
    }

    public void setIdTiposerv(Tiposervicio idTiposerv) {
        this.idTiposerv = idTiposerv;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Contratoserviciodetalle)) {
            return false;
        }
        Contratoserviciodetalle other = (Contratoserviciodetalle) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "sa.satcol.jpa.entites.Contratoserviciodetalle[ id=" + id + " ]";
    }
    
}
