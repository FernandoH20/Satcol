/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package sa.usu.resourceusu.resource;

import javax.ejb.EJB;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.POST;
import javax.ws.rs.core.MediaType;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONObject;
import sa.satcol.ejb.usu.bean.ContratoservicioBean;
import sa.satcol.ejb.usu.data.CommonInput;

/**
 * REST Web Service
 *
 * @author victor.flores
 */
@Path("Contratoservicio")
@RequestScoped
public class ContratoservicioResource {

    @Context
    private UriInfo context;

   @EJB
    private ContratoservicioBean contratoservicioBean;
    private ObjectMapper objectMapper;
    public ContratoservicioResource() {
         objectMapper = new ObjectMapper();
    }

    @POST
    @Path("createcontrato")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject create(CommonInput input) {
        System.out.println("paso");
        JSONObject object = objectMapper.convertValue(contratoservicioBean.create(input), JSONObject.class);
        return object;
    }
}
