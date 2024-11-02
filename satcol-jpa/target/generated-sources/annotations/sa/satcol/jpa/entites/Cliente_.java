package sa.satcol.jpa.entites;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import sa.satcol.jpa.entites.Contratoservicio;

@Generated(value="EclipseLink-2.7.10.v20211216-rNA", date="2024-11-01T15:09:55")
@StaticMetamodel(Cliente.class)
public class Cliente_ { 

    public static volatile SingularAttribute<Cliente, Integer> estado;
    public static volatile SingularAttribute<Cliente, Integer> tipo;
    public static volatile SingularAttribute<Cliente, String> ci;
    public static volatile SingularAttribute<Cliente, Date> fechaRegistro;
    public static volatile SingularAttribute<Cliente, String> direccion;
    public static volatile SingularAttribute<Cliente, String> nombre;
    public static volatile ListAttribute<Cliente, Contratoservicio> contratoservicioList;
    public static volatile SingularAttribute<Cliente, Integer> usuarioRegistro;
    public static volatile SingularAttribute<Cliente, String> apellido;
    public static volatile SingularAttribute<Cliente, String> nit;
    public static volatile SingularAttribute<Cliente, String> celular;
    public static volatile SingularAttribute<Cliente, Integer> id;
    public static volatile SingularAttribute<Cliente, String> telefono;

}