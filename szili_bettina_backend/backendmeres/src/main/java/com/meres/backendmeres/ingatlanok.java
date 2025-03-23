/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.meres.backendmeres;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import java.util.*;
import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.core.Application;
import javax.ws.rs.ext.Provider;
/**
 *
 * @author MSI
 */
@ApplicationScoped
@ApplicationPath("/api")
public class ingatlanok extends Application{
   

@Path("/ingatlan")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class IngatlanokController {
    private static final Map<Integer, Property> properties = new HashMap<>();
    private static int currentId = 1;

    @GET
    public Response getAllProperties() {
        return Response.ok(new ArrayList<>(properties.values())).build();
    }

    @POST
    public Response addProperty(Property property) {
        if (property.getKategori() == null || property.getLeiras() == null || 
            property.getHirdetesDatuma() == null || property.getAr() == 0 || 
            property.getKepUrl() == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Hiányos adatok.").build();
        }
        property.setId(currentId++);
        properties.put(property.getId(), property);
        return Response.status(Response.Status.CREATED).entity(Collections.singletonMap("id", property.getId())).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteProperty(@PathParam("id") int id) {
        if (properties.remove(id) != null) {
            return Response.noContent().build();
        }
        return Response.status(Response.Status.NOT_FOUND).entity("Az ingatlan nem létezik.").build();
    }
}

class Property {
    private int id;
    private String kategori;
    private String leiras;
    private String hirdetesDatuma;
    private boolean tehermentes;
    private int ar;
    private String kepUrl;

    // Getter/ Setter
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getKategori() { return kategori; }
    public void setKategori(String kategori) { this.kategori = kategori; }
    public String getLeiras() { return leiras; }
    public void setLeiras(String leiras) { this.leiras = leiras; }
    public String getHirdetesDatuma() { return hirdetesDatuma; }
    public void setHirdetesDatuma(String hirdetesDatuma) { this.hirdetesDatuma = hirdetesDatuma; }
    public boolean isTehermentes() { return tehermentes; }
    public void setTehermentes(boolean tehermentes) { this.tehermentes = tehermentes; }
    public int getAr() { return ar; }
    public void setAr(int ar) { this.ar = ar; }
    public String getKepUrl() { return kepUrl; }
    public void setKepUrl(String kepUrl) { this.kepUrl = kepUrl; }
}

}
