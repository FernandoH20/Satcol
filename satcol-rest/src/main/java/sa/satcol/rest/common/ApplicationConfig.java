/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package sa.satcol.rest.common;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author victor.flores
 */
@javax.ws.rs.ApplicationPath("service")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<Class<?>>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(sa.usu.resourceusu.resource.ClienteResource.class);
        resources.add(sa.usu.resourceusu.resource.ContratoservicioResource.class);
        resources.add(sa.usu.resourceusu.resource.TiposervicioResource.class);
        resources.add(sa.usu.resourceusu.resource.UsuarioResource.class);
    }
    
}
