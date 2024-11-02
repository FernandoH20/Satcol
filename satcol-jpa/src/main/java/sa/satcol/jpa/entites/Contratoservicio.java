/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.entites;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;
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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 *
 * @author victor.flores
 */
@Entity
@Table(name = "contratoservicio")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Contratoservicio.findAll", query = "SELECT c FROM Contratoservicio c"),
    @NamedQuery(name = "Contratoservicio.findById", query = "SELECT c FROM Contratoservicio c WHERE c.id = :id"),
    @NamedQuery(name = "Contratoservicio.findByNrocontrato", query = "SELECT c FROM Contratoservicio c WHERE c.nrocontrato = :nrocontrato"),
    @NamedQuery(name = "Contratoservicio.findByTotalserv", query = "SELECT c FROM Contratoservicio c WHERE c.totalserv = :totalserv"),
    @NamedQuery(name = "Contratoservicio.findByEstado", query = "SELECT c FROM Contratoservicio c WHERE c.estado = :estado"),
    @NamedQuery(name = "Contratoservicio.findByFechaRegistro", query = "SELECT c FROM Contratoservicio c WHERE c.fechaRegistro = :fechaRegistro"),
    @NamedQuery(name = "Contratoservicio.findByUsuarioRegistro", query = "SELECT c FROM Contratoservicio c WHERE c.usuarioRegistro = :usuarioRegistro")})
public class Contratoservicio implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "nrocontrato")
    private Integer nrocontrato;
    @Column(name = "totalserv")
    private BigInteger totalserv;
    @Column(name = "estado")
    private Integer estado;
    @Column(name = "fecha_registro")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaRegistro;
    @Column(name = "usuario_registro")
    private Integer usuarioRegistro;
    @JoinColumn(name = "id_cliente", referencedColumnName = "id")
    @ManyToOne
    private Cliente idCliente;
    @OneToMany(mappedBy = "idContrato")
    private List<Contratoserviciodetalle> contratoserviciodetalleList;

    public Contratoservicio() {
    }

    public Contratoservicio(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNrocontrato() {
        return nrocontrato;
    }

    public void setNrocontrato(Integer nrocontrato) {
        this.nrocontrato = nrocontrato;
    }

    public BigInteger getTotalserv() {
        return totalserv;
    }

    public void setTotalserv(BigInteger totalserv) {
        this.totalserv = totalserv;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
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

    public Cliente getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Cliente idCliente) {
        this.idCliente = idCliente;
    }

    @XmlTransient
    @JsonIgnore
    public List<Contratoserviciodetalle> getContratoserviciodetalleList() {
        return contratoserviciodetalleList;
    }

    public void setContratoserviciodetalleList(List<Contratoserviciodetalle> contratoserviciodetalleList) {
        this.contratoserviciodetalleList = contratoserviciodetalleList;
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
        if (!(object instanceof Contratoservicio)) {
            return false;
        }
        Contratoservicio other = (Contratoservicio) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "sa.satcol.jpa.entites.Contratoservicio[ id=" + id + " ]";
    }
    
}
