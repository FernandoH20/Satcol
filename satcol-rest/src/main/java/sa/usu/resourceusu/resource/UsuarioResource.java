/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/GenericResource.java to edit this template
 */
package sa.usu.resourceusu.resource;

import sa.satcol.ejb.usu.bean.UsuarioBeans;
import sa.satcol.ejb.usu.data.CommonInput;
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

/**
 * REST Web Service
 *
 * @author victor.flores
 */
@Path("Usuario")
@RequestScoped
public class UsuarioResource {

    @Context
    private UriInfo context;
    @EJB
    private UsuarioBeans usuarioBeans;
    private ObjectMapper objectMapper;

    public UsuarioResource() {
        objectMapper = new ObjectMapper();
    }

    @POST
    @Path("verificaexiste")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject verificaexiste(CommonInput input) {
        System.out.println("usuario rest");
        JSONObject object = objectMapper.convertValue(usuarioBeans.verificaexiste(input), JSONObject.class);
        return object;
    }
    @POST
    @Path("findall")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject findAll(CommonInput input) {
        System.out.println("pasoooo");
        JSONObject object = objectMapper.convertValue(usuarioBeans.findAll(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("create")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject create(CommonInput input) {
        JSONObject object = objectMapper.convertValue(usuarioBeans.create(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("delete")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject delete(CommonInput input) {
        System.out.println("dd");
        JSONObject object = objectMapper.convertValue(usuarioBeans.delete(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("findByIdedit")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject findByIdedit(CommonInput input) {
        System.out.println("id");
        JSONObject object = objectMapper.convertValue(usuarioBeans.findByIdedit(input), JSONObject.class);
        return object;
    }

    @POST
    @Path("update")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public JSONObject update(CommonInput input) {
        JSONObject object = objectMapper.convertValue(usuarioBeans.update(input), JSONObject.class);
        return object;
    }
}
