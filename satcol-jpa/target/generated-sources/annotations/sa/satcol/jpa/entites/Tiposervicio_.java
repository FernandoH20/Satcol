package sa.satcol.jpa.entites;

import java.math.BigDecimal;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import sa.satcol.jpa.entites.Contratoserviciodetalle;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2024-11-01T15:09:55")
@StaticMetamodel(Tiposervicio.class)
public class Tiposervicio_ { 

    public static volatile SingularAttribute<Tiposervicio, BigDecimal> precio;
    public static volatile SingularAttribute<Tiposervicio, Integer> estado;
    public static volatile SingularAttribute<Tiposervicio, Integer> usuarioRegistro;
    public static volatile SingularAttribute<Tiposervicio, String> nombretipo;
    public static volatile SingularAttribute<Tiposervicio, Date> fechaRegistro;
    public static volatile SingularAttribute<Tiposervicio, Integer> id;
    public static volatile ListAttribute<Tiposervicio, Contratoserviciodetalle> contratoserviciodetalleList;

}