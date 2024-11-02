package sa.satcol.jpa.entites;

import java.math.BigDecimal;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import sa.satcol.jpa.entites.Contratoservicio;
import sa.satcol.jpa.entites.Tiposervicio;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2024-11-01T15:09:55")
@StaticMetamodel(Contratoserviciodetalle.class)
public class Contratoserviciodetalle_ { 

    public static volatile SingularAttribute<Contratoserviciodetalle, Integer> usuarioRegistro;
    public static volatile SingularAttribute<Contratoserviciodetalle, Date> fechaRegistro;
    public static volatile SingularAttribute<Contratoserviciodetalle, Tiposervicio> idTiposerv;
    public static volatile SingularAttribute<Contratoserviciodetalle, BigDecimal> montoserv;
    public static volatile SingularAttribute<Contratoserviciodetalle, Integer> id;
    public static volatile SingularAttribute<Contratoserviciodetalle, Contratoservicio> idContrato;
    public static volatile SingularAttribute<Contratoserviciodetalle, String> observacion;

}