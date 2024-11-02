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
import sa.satcol.ejb.usu.bean.TiposervicioBean;
import sa.satcol.ejb.usu.data.CommonInput;

/**
 * REST Web Service
 *
 * @author crifor
 */
@Path("Tiposervicio")
@RequestScoped
public class TiposervicioResource {

   @Context
    private UriInfo context;
    @EJB
    private TiposervicioBean tiposervicioBean;
    private ObjectMapper objectMapper;

    public TiposervicioResource() {
        objectMapper = new ObjectMapper();
    }

    @POST
    @Path("findall")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject findAll(CommonInput input) {
        JSONObject object = objectMapper.convertValue(tiposervicioBean.findAll(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("create")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject create(CommonInput input) {
        System.out.println("paso");
        JSONObject object = objectMapper.convertValue(tiposervicioBean.create(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("delete")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject delete(CommonInput input) {
        System.out.println("asd");
        JSONObject object = objectMapper.convertValue(tiposervicioBean.delete(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("findByIdedit")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject findByIdedit(CommonInput input) {
        System.out.println("idssss");
        JSONObject object = objectMapper.convertValue(tiposervicioBean.findByIdedit(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("update")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject update(CommonInput input) {
        JSONObject object = objectMapper.convertValue(tiposervicioBean.update(input), JSONObject.class);
        return object;
    }

   
}
