<%-- 
    Document   : usuario
    Created on : 26 oct de 2024, 19:54:08
    Author     : fernando
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags/" %>
<t:template>
    <jsp:attribute name="header">
        <!--        <link href="../../common/css/fileinput/fileinput.min.css" rel="stylesheet" type="text/css"/>  
                <link href="../../common/css/estilos.css" rel="stylesheet" type="text/css">-->
    </jsp:attribute>
    <jsp:attribute name="footer">  
        <script src="../../module-menu/view/usuario-view.js" type="text/javascript"></script>
        <script src="../../module-menu/presenter/usuario-presenter.js" type="text/javascript"></script>
        <script src="../../module-menu/js/usuario.js" type="text/javascript"></script>
    </jsp:attribute> 

    <jsp:body>
        <div id="containerLote">
            <div class="container-fluid" >
                <div class="col-md-12" id="filterusuario" >
                    <h4 class="panel-title filter-title" data-toggle="collapse" href="#collapse1">
                        <h3>Usuario</h3>
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <h4 class="panel-title filter-title" data-toggle="collapse" href="#collapse1">
                                    Filtrar por Usuario: <span class="findBy"></span>  <span class="caret"></span>
                                </h4>             
                                <div class="clearfix"></div>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse" aria-expanded="false">
                                <div class="panel-body">
                                    <form action="" method="POST" id="formFilter" class="form-horizontal" role="form">
                                        <div class="col-md-3">
                                            <div class="form-group has-feedback">
                                                <label for="usuario[nombre]" class="col-md-4 control-label">Nombre:</label>
                                                <div class="col-md-6">
                                                    <input  name="usuario[nombre]" class="form-control">
                                                </div>
                                            </div>  
                                        </div>  
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="text-right">
                                                    <button type="reset" class="btn btn-default">{{reset}}</button>
                                                    <button type="submit" class="btn btn-primary btn-raised">{{buscar}}</button>
                                                </div>
                                            </div>
                                        </div> 

                                    </form>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="col-md-12" id="toolBarLote" >
                    <div class="panel panel-default">   
                        <div class="panel-heading"> 
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group btn-group-sm " role="group" aria-label="First group"> 
                                    <a href="#" title="Crear" class="btn btn-default glyphicon glyphicon-plus" onclick="modalPresenter.openCreate();"></a>
                                    <a href="#" title="Editar" class="btn btn-default glyphicon glyphicon-pencil" onclick="modalPresenter.openEdit();"></a>
                                    <a href="#" title="Importar" class="btn btn-default glyphicon glyphicon-trash" onclick="modalPresenter.delete();"></a>
                                    <!--<a href="#" title="Actualizar" class="btn btn-default glyphicon glyphicon-floppy-disk" onclick="modalPresenter.actualizar();"> Actualizar</a>-->

                                </div>   
                            </div>
                            <div class="clearfix"></div>
                        </div>        
                    </div> 
                </div>

                <div class="col-md-12" id="tableUsuario">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title pull-left">Listado</h3>
                            <a href="#search" class="btn-sm pull-right glyphicon glyphicon-refresh" onclick="filterPresenter.refrescar();"></a>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            <div id="table_content">     
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <div class="modal fade" id="modalUsuario" role="dialog" aria-labelledby="modal" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-lg" role="asignacion">
                <div class="modal-content">
                    <form action="" method="POST" id="formUsuario" class="form-horizontal" role="form" >
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modal">Creación de usuario</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-md-6"> 
                                    <div class="form-group has-feedback">
                                        <label for="usuario[nombre]" class="col-sm-4 control-label">Nombre:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[nombre]" class="form-control" value="" />
                                        </div>
                                    </div> 
                                </div>

                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[apellidopat]" class="col-sm-4 control-label">Apellido paterno:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[apellidopat]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[apellidomat]" class="col-sm-4 control-label">Apellido materno:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[apellidomat]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[direccion]" class="col-sm-4 control-label">Dirección:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[direccion]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[apellidomat]" class="col-sm-4 control-label">CI:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[ci]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[telefono]" class="col-sm-4 control-label">Teléfono:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[telefono]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[username]" class="col-sm-4 control-label">Usuario login:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[username]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[password]" class="col-sm-4 control-label">Password:</label>
                                        <div class="col-sm-8">                            
                                            <input type="text" name="usuario[password]" class="form-control" value="" />
                                        </div>
                                    </div> 

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[cargo]" class="col-sm-4 control-label">Cargo:</label>
                                        <div class="col-sm-8">                            

                                            <select  id='car' class="form-control" name="usuario[cargo]" title="cargo" tabindex="1" required> 
                                                <option value="">Seleccione</option>
                                                <option value="administrador">Administrador</option>
                                                <option value="Jefe">Jefe</option>
                                                <option value="Cajero">Cajero</option>

                                            </select>
                                        </div>
                                    </div> 
                                </div>
                                <div class="col-md-6">  
                                    <div class="form-group has-feedback">
                                        <label for="usuario[estado]" class="col-sm-4 control-label">Estado:</label>
                                        <div class="col-sm-8">                            
                                            <select  id='est' class="form-control" name="usuario[estado]" title="estado" tabindex="1" required> 
                                                <option value="">Seleccione</option>
                                                <option value="1">Habilitado</option>
                                                <option value="2">Deshabilitado</option>                                          
                                            </select>
                                        </div>
                                    </div> 

                                </div>
                            </div>
                            <!--                            <div class="row">
                                                            <div class="col-md-6">  
                            
                                                                <div class="form-group has-feedback">
                                                                    <label for="cobDifLotes[fechaDePago]:date" class="col-md-4 control-label">Fecha Efectivo de Pago:</label>
                                                                    <div class="col-md-8">
                                                                        <div class="input-group date _fixDate">
                                                                            <input type="text" name="cobDifLotes[fechaDePago]:date" class="form-control _maskDate" />
                                                                            <span class="input-group-addon">
                                                                                <span class="glyphicon-calendar glyphicon"></span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                            
                            
                                                        </div>-->
                        </div>
                        <div class="modal-footer">
                            <input type="hidden" name="usuario[id]" value="">
                            <button type="button" class="btn btn-default btn-raised" data-dismiss="modal">{{cerrar}}</button>
                            <button type="submit" class="btn btn-primary btn-raised">{{guardar}}</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </jsp:body>
</t:template>