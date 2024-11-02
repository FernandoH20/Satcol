package sa.satcol.jpa.entites;

import java.math.BigInteger;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import sa.satcol.jpa.entites.Cliente;
import sa.satcol.jpa.entites.Contratoserviciodetalle;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2024-11-01T15:09:55")
@StaticMetamodel(Contratoservicio.class)
public class Contratoservicio_ { 

    public static volatile SingularAttribute<Contratoservicio, Integer> estado;
    public static volatile SingularAttribute<Contratoservicio, Cliente> idCliente;
    public static volatile SingularAttribute<Contratoservicio, Integer> usuarioRegistro;
    public static volatile SingularAttribute<Contratoservicio, Date> fechaRegistro;
    public static volatile SingularAttribute<Contratoservicio, Integer> id;
    public static volatile SingularAttribute<Contratoservicio, Integer> nrocontrato;
    public static volatile SingularAttribute<Contratoservicio, BigInteger> totalserv;
    public static volatile ListAttribute<Contratoservicio, Contratoserviciodetalle> contratoserviciodetalleList;

}