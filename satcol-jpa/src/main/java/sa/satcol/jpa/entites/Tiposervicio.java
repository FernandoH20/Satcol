/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.jpa.entites;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;
import org.codehaus.jackson.annotate.JsonIgnore;

/**
 *
 * @author crifor
 */
@Entity
@Table(name = "tiposervicio")
@NamedQueries({
    @NamedQuery(name = "Tiposervicio.findAll", query = "SELECT t FROM Tiposervicio t"),
    @NamedQuery(name = "Tiposervicio.findById", query = "SELECT t FROM Tiposervicio t WHERE t.id = :id"),
    @NamedQuery(name = "Tiposervicio.findByNombretipo", query = "SELECT t FROM Tiposervicio t WHERE t.nombretipo = :nombretipo"),
    @NamedQuery(name = "Tiposervicio.findByPrecio", query = "SELECT t FROM Tiposervicio t WHERE t.precio = :precio"),
    @NamedQuery(name = "Tiposervicio.findByEstado", query = "SELECT t FROM Tiposervicio t WHERE t.estado = :estado"),
    @NamedQuery(name = "Tiposervicio.findByFechaRegistro", query = "SELECT t FROM Tiposervicio t WHERE t.fechaRegistro = :fechaRegistro"),
    @NamedQuery(name = "Tiposervicio.findByUsuarioRegistro", query = "SELECT t FROM Tiposervicio t WHERE t.usuarioRegistro = :usuarioRegistro")})
public class Tiposervicio implements Serializable {

    @OneToMany(mappedBy = "idTiposerv")
    private List<Contratoserviciodetalle> contratoserviciodetalleList;

    @OneToMany(mappedBy = "idTiposervicio")
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 30)
    @Column(name = "nombretipo")
    private String nombretipo;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "precio")
    private BigDecimal precio;
    @Column(name = "estado")
    private Integer estado;
    @Column(name = "fecha_registro")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaRegistro;
    @Column(name = "usuario_registro")
    private Integer usuarioRegistro;

    public Tiposervicio() {
    }

    public Tiposervicio(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombretipo() {
        return nombretipo;
    }

    public void setNombretipo(String nombretipo) {
        this.nombretipo = nombretipo;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
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

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Tiposervicio)) {
            return false;
        }
        Tiposervicio other = (Tiposervicio) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "sa.satcol.jpa.entites.Tiposervicio[ id=" + id + " ]";
    }

    @XmlTransient
    @JsonIgnore
    public List<Contratoserviciodetalle> getContratoserviciodetalleList() {
        return contratoserviciodetalleList;
    }

    public void setContratoserviciodetalleList(List<Contratoserviciodetalle> contratoserviciodetalleList) {
        this.contratoserviciodetalleList = contratoserviciodetalleList;
    }
   
}
